import { Provider, Wallet } from "zksync-ethers";
import * as hre from "hardhat";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { ethers } from "ethers";
import dotenv from "dotenv";

// load vars from .env into process.env
dotenv.config();

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";

if (!PRIVATE_KEY) {
  throw "Private key not set! Set WALLET_PRIVATE_KEY env var and try again.";
}

export default async function () {
  const rpcUrl = hre.network.config.url;
  if (!rpcUrl) {
    throw `RPC URL not set for ${hre.network.name}`;
  }

  const provider = new Provider(rpcUrl);
  // NOTE: deployer wallet must already have sufficient ETH on L2 to pay for the contract deployment
  const wallet = new Wallet(PRIVATE_KEY, provider);
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("SimpleStore");
  console.log(`Deploying ${artifact.contractName} using account ${wallet.address}`);

  const constructorArguments: any[] = []
  const estimatedFee = await deployer.estimateDeployFee(artifact, constructorArguments);
  const parsedFee = ethers.formatEther(estimatedFee);
  console.log(`Contract deployment fee estimate: ${parsedFee} ETH`);

  const balance = await wallet.getBalance();
  if (balance < estimatedFee) {
    throw `Account ${wallet.address} doesn't have sufficient funds for deployment`;
  }

  const deployedContract = await deployer.deploy(artifact, constructorArguments);
  const contractAddress = await deployedContract.getAddress();
  console.log(`${artifact.contractName} was deployed at ${contractAddress}`);
}

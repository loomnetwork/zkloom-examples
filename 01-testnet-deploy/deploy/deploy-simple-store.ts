import * as zkweb3 from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";

if (!PRIVATE_KEY) {
  throw "Private key not set! Set WALLET_PRIVATE_KEY env var and try again.";
}

export default async function (hre: HardhatRuntimeEnvironment) {
  const wallet = new zkweb3.Wallet(PRIVATE_KEY);
  // NOTE: deployer wallet must already have sufficient ETH on L2 to pay for the contract deployment
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("SimpleStore");
  console.log(`Deploying ${artifact.contractName} using account ${deployer.zkWallet.address}`);

  const estimatedFee = await deployer.estimateDeployFee(artifact, []);
  const parsedFee = ethers.utils.formatEther(estimatedFee.toString());
  console.log(`Contract deployment fee estimate: ${parsedFee} ETH`);

  const deployedContract = await deployer.deploy(artifact, []);
  console.log(`${artifact.contractName} was deployed at ${deployedContract.address}`);
}

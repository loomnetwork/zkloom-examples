import { HardhatUserConfig } from "hardhat/config";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

const config: HardhatUserConfig = {
  defaultNetwork: "zkLoomSepolia",
  networks: {
    zkLoomSepolia: {
      url: "http://zkloom-sepolia.dappchains.com:2052",
      zksync: true,
      ethNetwork: "sepolia"
    },
  },
  solidity: {
    version: "0.8.17",
  }
};

export default config;
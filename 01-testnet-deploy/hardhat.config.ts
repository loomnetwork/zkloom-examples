import { HardhatUserConfig } from "hardhat/config";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

const config: HardhatUserConfig = {
  defaultNetwork: "zkLoomTestnet",
  networks: {
    zkLoomTestnet: {
      url: "http://zkloom-t1.dappchains.com:2052",
      zksync: true,
      ethNetwork: "http://zkloom-t1.dappchains.com:2082"
    },
  },
  solidity: {
    version: "0.8.16",
  },
  zksolc: {
    version: "1.3.10",
    compilerSource: "binary",
    settings: {},
  }
};

export default config;
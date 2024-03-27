# 01-testnet-deploy

This example demonstrates how to deploy a simple contract to the zkLoom Sepolia Testnet using Hardhat and Ethers.js.

1. Install the required dependencies:
   ```bash
   yarn
   ```

2. You'll be deploying the `SimpleStore` contract (you can find the source
   in `contracts/SimpleStore.sol`), but before you can do that you'll need
   to compile it:
   ```bash
   yarn hardhat compile
   ```

   The first time you compile the contract you should see output similar to this:
   ```
   zksolc version 1.4.0 successfully downloaded
   ...
   Compiling 1 Solidity file
   --> contracts/SimpleStore.sol

   Successfully compiled 1 Solidity file
   ```

3. Copy the `.env.default` file to `.env` and set the `WALLET_PRIVATE_KEY`
   to the hex-encoded ECDSA private key of the wallet you want to use to
   deploy the contract.

   NOTE: The deployer wallet will need to have some ETH on zkLoom Sepolia.

4. Deploy the `SimpleStore` contract to zkLoom Testnet
   ```bash
   yarn hardhat deploy-zksync --script deploy-simple-store.ts
   ```

   If all goes well you should see output similar to this:
   ```
   Deploying SimpleStore using account 0xe706e60ab5Dc512C36A4646D719b889F398cbBcB
   Contract deployment fee estimate: 0.00012952175 ETH
   SimpleStore was deployed at 0xfb6c71bDFaddC830443b0c5157782Cae4E6a426f
   ```
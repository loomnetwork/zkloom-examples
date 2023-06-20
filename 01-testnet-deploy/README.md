# 01-testnet-deploy

This example demonstrates how to deploy and then interact with a simple contract to the zkLoom Testnet using Hardhat and Ethers.js.

1. Install the required dependencies:
   ```bash
   yarn
   ```

2. Compile the `SimpleStore` contract:
   ```bash
   yarn hardhat compile
   ```

   The first time you compile the contract you should see output similar to this:
   ```
   zksolc version 1.3.10 successfully downloaded
   Compiling 1 Solidity file
   --> contracts/SimpleStore.sol

   Successfully compiled 1 Solidity file
   ```

3. The deploy step will use the private key you set in the `WALLET_PRIVATE_KEY` env var,
   so set it to your hex encoded ECDSA key.
   ```bash
   export WALLET_PRIVATE_KEY=0x...
   ```

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
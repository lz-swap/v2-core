import 'dotenv/config'
import { HardhatUserConfig } from 'hardhat/config'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import '@nomiclabs/hardhat-etherscan'

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : ['']

const config: HardhatUserConfig = {
  solidity: {
    version: '0.5.16',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  namedAccounts: {
    deployer: process.env.DEPLOYER || ''
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN || '',
      bscTestnet: process.env.BSCSCAN || ''
    }
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://rpc.sepolia.org',
      chainId: 11155111,
      accounts
    },
    'bsc-testnet': {
      url: 'https://bsc-testnet.public.blastapi.io',
      chainId: 97,
      accounts
    }
  }
}

export default config

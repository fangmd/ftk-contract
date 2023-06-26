import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"

const INFURA_KEY = process.env.INFURA_KEY || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1 || ""
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || ""

// console.log(INFURA_KEY)
// console.log(PRIVATE_KEY)
// console.log(PRIVATE_KEY1);
// console.log(ETHERSCAN_KEY);


const config: HardhatUserConfig = {
  defaultNetwork: "sepolia",
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
      accounts: [PRIVATE_KEY, PRIVATE_KEY1],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_KEY
  },
}

export default config

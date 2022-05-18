
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config()
require("@nomiclabs/hardhat-ethers")
require('@nomiclabs/hardhat-etherscan')


const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env

module.exports = {
  solidity: '0.7.3',
  defaultNetwork: 'ropsten',
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
}


//npx hardhat verify --network ropsten 0xeCB9CeFc01cBFb292871f0AB52fa9C9b45c82dF5 'Hello World'
// npx hardhat verify --network ropsten CCC 'Hello World'

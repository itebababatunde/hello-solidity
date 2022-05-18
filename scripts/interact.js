
const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const { ethers, network } = require('hardhat')
const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json')


//provider
const alchemyProvider = new ethers.providers.AlchemyProvider("ropsten",API_KEY)


//signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract 
const helloWorldContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contract.abi,
    signer
)

async function main (){
    const message = await helloWorldContract.message();
    console.log('old message: ' + message);
    console.log('Upating message...')

    const tx = await helloWorldContract.update('Badboy');
    await tx.wait()


     const newMessage = await helloWorldContract.message()
     console.log('The new message is: ' + newMessage)

}


main()

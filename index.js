const ethers = require("ethers")
const compiled = require("./src/ethereum/build/contracts/ERC20WithString.json")

const init = async () => {
    const userAddress = "0x3A8E4Cc9deef5c4166f069245F715D15a6dA42ef";
    const contractAddress = "0xccA89a21CB333D0d8fAb9e49bC5C821F68e546E5";

    const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/7c63562475954e8a86b703310b8a64e8");

    const signer = new ethers.VoidSigner(userAddress, provider);

    const contract = new ethers.Contract(contractAddress, compiled.abi, signer);

    const devName = await contract.getDevName();

    const erc20Name = await contract.name();

    const symbol = await contract.symbol();

    const totalSupply = await contract.totalSupply();

    console.log(`Dev name is: ${devName}`)
    console.log(`ERC20 name is: ${erc20Name}`)
    console.log(`ERC20 symbol is: ${symbol}`)
    console.log(`Supply is: ${ethers.utils.formatUnits(totalSupply, 18)}`)
}

init()
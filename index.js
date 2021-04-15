const ethers = require("ethers")
const compiled = require("./src/ethereum/build/contracts/ERC20WithString.json")

const init = async () => {
    const userAddress = "0x3A8E4Cc9deef5c4166f069245F715D15a6dA42ef";
    const contractAddress = "0x0D4119043f255B7550a77cC2CDc653433Fa318c0";

    const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/7c63562475954e8a86b703310b8a64e8");

    const signer = new ethers.VoidSigner(userAddress, provider);

    const contract = new ethers.Contract(contractAddress, compiled.abi, signer);

    const devName = await contract.getDevName();

    const erc20Name = await contract.name();

    const symbol = await contract.symbol();

    console.log(`Dev name is: ${devName}`)
    console.log(`ERC20 name is: ${erc20Name}`)
    console.log(`ERC20 symbol is: ${symbol}`)
}

init()
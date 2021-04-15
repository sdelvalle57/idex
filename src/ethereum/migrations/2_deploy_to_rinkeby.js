const ERC20Token = artifacts.require("./ERC20WithString.sol");

module.exports = function(deployer) {
    deployer.deploy(ERC20Token, "Santiago", "Del Valle Token", "SDV");
};
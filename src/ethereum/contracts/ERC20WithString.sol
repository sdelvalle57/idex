// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20WithString is ERC20 {

    string private _devName;

    constructor(string memory devName, string memory erc20Name, string memory symbol) ERC20(erc20Name, symbol)  {
        _devName = devName;
        _mint(msg.sender, 1000000*10**18);
    }

    function getDevName() external view returns(string memory){
     return _devName;
    }
 }
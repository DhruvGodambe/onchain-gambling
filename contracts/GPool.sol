// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract GPool {
    string public asset1 = "USDC";
    string public asset2 = "DAI";
    string public asset3 = "USDT";

    address public USDC;
    address public DAI;
    address public USDT;

    constructor(address _usdc, address _usdt, address _dai) {
        USDC = _usdc;
        USDT = _usdt;
        DAI = _dai;
    }

    
}
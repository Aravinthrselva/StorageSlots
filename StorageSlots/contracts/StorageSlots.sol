// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract StorageSlots {

// solidity is free to use all the storage slots , from 0x00.... to 0xfffffff
// but inorder to stay organised --- it starts from 0x0000000...0 

// a storage slot can be upto 32 bytes

// 0x0 -> 0x0000000000.....0 (padded out to 32 bytes)
// 0x1 -> 0x0000000000...1 (padded out to 32 bytes)

    uint slot1 = 123;  // 0x0 uint256 -> 32bytes 
    uint slot2 = 85;   //0x1 uint256 -> 32bytes

    mapping(uint => uint) slot3;


    constructor() {
        slot3[2] = 1045624413;
        slot3[5] = 102;
        slot3[25] = 123;
        slot3[4] = 45;
        slot3[52] = 1 ;
    }
}

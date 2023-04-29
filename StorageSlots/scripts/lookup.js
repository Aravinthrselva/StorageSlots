
const {ethers} = require("hardhat");

// address at which the StorageSlots.sol contract is deployed locally or in a testnet
const addr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

async function lookup() { 

    const intValue = await ethers.provider.getStorageAt(addr, '0x0');

    //the value returned is a hex which needs to be converted to an int using the parseInt
    console.log("Value at 0x0 location: ", parseInt(intValue));

    //hexZeroPad from utils converts a value into a hex value and pads it out to 32 bytes 
    // by padding'0's in front 

    const key = ethers.utils.hexZeroPad(2,32);
    
    // slice off the first 2 digits '0x' fron the baseSlot before feeding it to the keccak
    // becasue the key already contains the '0x' to indicate it is a hex value
    const baseSlot = ethers.utils.hexZeroPad(0x2,32).slice(2);
    console.log({key, baseSlot});

    const storageSlot = ethers.utils.keccak256(key + baseSlot);
    console.log("storageSlot : ", storageSlot);

    const mapValue = await ethers.provider.getStorageAt(addr, storageSlot);
    console.log("Value at 0x2 mapping : ", parseInt(mapValue));
}

lookup();
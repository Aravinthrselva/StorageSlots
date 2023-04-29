
const hre = require("hardhat");

async function main() {
 

  const StorageSlots = await hre.ethers.getContractFactory("StorageSlots");
  const storageSlots = await StorageSlots.deploy();

  await storageSlots.deployed();

  console.log("Contract deployed to :", storageSlots.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

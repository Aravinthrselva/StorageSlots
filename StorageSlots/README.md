```uint public slot1 = 123```  // 0x0

Declaring a variable as public , creates a getter fuunction for it - 
allowing it to be called from outside	


But what if the variable is NOT declared as public, like so ???	

`uint slot1 = 123; //0x0 `
` uint slot2 = 85;     //0x1 `   

That’s when **eth_getStorageAt**   JSON: RPC helps

# eth_getStorageAt 

"Returns the value from a storage position at a given address, 
or in other words, 
returns the state of the contract's storage, 
which may not be exposed via the contract's methods.

It needs the 

1. contract address  and
2. storage address

as params


```
{
  ""id"": 1,
  ""jsonrpc"": ""2.0"",
  ""method"": ""eth_getStorageAt"",
  ""params"": [
    ""0x407d73d8a49eeb85d32cf465507dd71d507100c1"",
    ""0x0"",
    ""latest""
  ]
}
```


Accessed using ethers 
const value = hre.ethers.provider.getStorageAt("contractAddress" , "storageSlot");

# Concepts covered in the code 

1. Storage Slots for simple datatypes like uint

2. Storage slot calculation for mappings  
keccak256(hexadecimal value (key) + base slot)

3. hexZeroPad 
ethers.utils.hexZeroPad( aBytesLike , length )

4. EIP1967 - library StorageSlot
StorageSlot.getUint256Slot(keccak256("avantgarde")).value = 49;

look it up
const slot = keccak256(toUtf8Bytes("avantgarde"));

5. Assigning arbitrary Storage slots  - to avoid Storage collisions
  






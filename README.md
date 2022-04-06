#### Solidity Smart Contracts with UI

1. Go to Remix IDE
2. Switch on ganache and connect it by selecting Web3 Provider on deploy
3. Compile Sol files and deploy
4. Copy ABI json -> list and ContractAddress -> 0x...hash 
    and paste it in `js/config.js`
5. Create relevant UI
6. Import Web3 JS min from CDN
7. Call methods on contract using the following sequence

---

```javascript
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// getAccount() will get the first account from  ganache and will set it as defaultAccount for our contract operations ////
async function getAccount() {
    let accounts = await web3.eth.getAccounts();
    console.log(accounts);
    web3.eth.defaultAccount = accounts[0];
    console.log(web3.eth.defaultAccount + ' account detected');
    return web3.eth.defaultAccount;
}

```

---

```javascript
    // Write functions in a similar fashion
    contract = new web3.eth.Contract(contractABI, contractAddress);
    let count = await contract.methods.getUser().call({ from: web3.eth.defaultAccount });
```

8. Manipulate DOM on stateUpdates.
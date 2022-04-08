## Solidity Smart Contracts with UI

---

#### Steps

##### 1. Visit the Remix IDE for Solidity Smart Contract development and deployment at https://remix.ethereum.org/
##### 2. Download Ganache from https://trufflesuite.com/ganache/index.html
##### 3. Start up Ganache and select a Workspace.
##### 4. Add a new Smart Contract in the Remix editor and deploy it to a Web3 provider on the same localhost URL (http://localhost:7545) for the Ganache RPC Server.
##### 5. Copy Contract ABI : JSON & Contract Address -> 0x... (hash) and paste it in `js/config.js` within the project structure
##### 6. Create relevant UI (here vanilla HTML, JS. View repo)
##### 7. Import Web3 JS min from CDN (link in index.html) - 

<br>

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.3/web3.min.js" 
        integrity="sha512-Ws+qbaGHSFw2Zc1e7XRpvW+kySrhmPLFYTyQ95mxAkss0sshj6ObdNP3HDWcwTs8zBJ60KpynKZywk0R8tG1GA==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer">
</script>
```

<br>

```html
<!-- Map File -->
https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.3/web3.min.js.map
```

##### 8. Call methods on contract using the following sequence (Refer to flow in `js/` directory)

> 8.1

```javascript
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

// getAccount() will get the first account from  ganache and 
// will set it as defaultAccount for our contract operations 

async function getAccount() {
    let accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    console.log(web3.eth.defaultAccount + ' account detected');
    return web3.eth.defaultAccount;
}

```

> 8.2

```javascript
    // Write functions in a similar fashion
    contract = new web3.eth.Contract(contractABI, contractAddress);
    let count = await contract.methods.getUser().call({ from: web3.eth.defaultAccount });
```

9. Manipulate DOM on stateUpdates. (Refer `js/app.js`)

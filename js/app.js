contract = new web3.eth.Contract(contractABI, contractAddress);

async function gettingUser() {
    let count = await contract.methods.getUser().call({ from: web3.eth.defaultAccount });
    console.log("Number of users: ", count);
    document.getElementById("count").innerHTML = "Count = " + count;
}

// gettingUser();


async function creatingUser() {
    let name = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let user = await contract.methods.createUser(name, number).call({ from: web3.eth.defaultAccount });
    console.log(user);
}
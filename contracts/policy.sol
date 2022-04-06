pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Policy {
	uint public count = 0; // state variable

	struct User {
		uint id;
		string name;
		string phone;
	}

	constructor() public {
		createUser('JS', '123123123');
	}

	mapping(uint => User) public users;

	function createUser(string memory _name, string memory _phone) public {
		count++;
		users[count] = User(count, _name, _phone);
	}

function getUser() public returns (uint) {
	return count;
}
}
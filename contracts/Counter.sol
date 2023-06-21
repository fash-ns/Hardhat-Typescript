/**
* Simple test smart contract
* @author Farbod Shams <farbodshams.2000@gmail.com>
**/

pragma solidity ^0.8.0;

contract Counter {
    uint private i;
    address private owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this method");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function increase() public {
        i = i + 1;
    }

    function decrease() public {
        require(i > 0, "Counter cannot be less than zero");
        i = i - 1;
    }

    function setManually(uint value) public onlyOwner {
        i = value;
    }

    function getCounter() public view returns(uint) {
        return i;
    }
}

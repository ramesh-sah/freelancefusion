// contracts/FreelanceContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract FreelanceContract {
    address public employer;
    address public freelancer;
    uint256 public agreedAmount;
    uint256 public startDate;
    uint256 public endDate;
    string public status;
    string public paymentStatus;

    constructor(
        address _employer,
        address _freelancer,
        uint256 _agreedAmount,
        uint256 _startDate,
        uint256 _endDate,
        string memory _status,
        string memory _paymentStatus
    ) {
        require(_employer != address(0), "Invalid employer address");
        require(_freelancer != address(0), "Invalid freelancer address");
        
        employer = _employer;
        freelancer = _freelancer;
        agreedAmount = _agreedAmount;
        startDate = _startDate;
        endDate = _endDate;
        status = _status;
        paymentStatus = _paymentStatus;
    }
}
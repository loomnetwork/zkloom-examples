// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract SimpleStore {
  uint256 private value;

  event ValueChanged(uint256 indexed _value, address _sender);

  function setValue(uint256 _value) public {
    value = _value;
    emit ValueChanged(value, msg.sender);
  }

  function getValue() public view returns (uint256) {
    return value;
  }
}
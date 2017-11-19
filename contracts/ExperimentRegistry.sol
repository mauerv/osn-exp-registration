pragma solidity ^0.4.15;

import './zeppelin/lifecycle/Killable.sol';

contract ExperimentRegistry is Killable {
  bytes32[] experiments;

  function getExperiments() constant public returns(bytes32[]) {
    return experiments;
  }
}

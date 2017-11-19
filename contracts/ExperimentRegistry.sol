pragma solidity ^0.4.15;

import './zeppelin/lifecycle/Killable.sol';

contract ExperimentRegistry is Killable {
  bytes32[] experiments;

  function ExperimentRegistry(bytes32[] experimentSeed) {
    for (uint i = 0; i < experimentSeed.length; i++) {
      experiments.push(experimentSeed[i]);
    }
  }

  function getExperiments() constant public returns(bytes32[]) {
    return experiments;
  }
}

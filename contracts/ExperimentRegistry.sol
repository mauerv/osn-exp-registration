pragma solidity ^0.4.15;

import './zeppelin/lifecycle/Killable.sol';

contract ExperimentRegistry is Killable {
  bytes32[] experiments;

  function getExperiments() constant external returns(bytes32[]) {
    return experiments;
  }

  function registerExperiment(bytes32 experimentHash) external {
    experiments.push(experimentHash);
  }
}

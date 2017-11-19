var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
var ExperimentRegistry = artifacts.require("./ExperimentRegistry.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, ExperimentRegistry);
  deployer.deploy(ExperimentRegistry, ['asdaq6K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'QmasdqweqqnS1YhWrCiS4gz7Xi34sd123Z7a', 'Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7s']);
};

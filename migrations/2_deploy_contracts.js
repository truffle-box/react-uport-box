var SimpleStorage = require("../contracts/SimpleStorage.sol");
var artifactor = require("truffle-artifactor");

module.exports = function(deployer) {
  artifactor.save({}, SimpleStorage).then(()=> {
    console.log('made it SimpleStorage')
    deployer.deploy(SimpleStorage);
  })
};

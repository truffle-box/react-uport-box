var Migrations = require("../contracts/Migrations.sol");
var artifactor = require("truffle-artifactor");

module.exports = function(deployer) {
  artifactor.save({}, Migrations).then(()=> {
    console.log('made it here')
    deployer.deploy(Migrations);
  })
};

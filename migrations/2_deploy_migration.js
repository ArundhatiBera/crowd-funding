const CrowdFunding = artifacts.require('CrowdFunding');

module.exports = function (deployer) {
    const target = 1000;
    const deadline = 3600;

    deployer.deploy(CrowdFunding, target, deadline);
};
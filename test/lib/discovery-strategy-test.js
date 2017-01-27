var chai = require("chai");
chai.should();

var DiscoveryStrategy = require("../../lib/discovery-strategy");

describe("DiscoveryStrategy", function() {
	var discoveryStrategy = new DiscoveryStrategy();

	it("#discoverInstances should throw Error", function() {
		(function() {
			discoveryStrategy.discoverInstances();
		}).should.Throw(Error, "DiscoveryStrategy#discoverInstances must be overridden by subclass");
	});

	it("#getDiscoveredInstances should throw Error", function() {
		(function() {
			discoveryStrategy.getDiscoveredInstances();
		}).should.Throw(Error, "DiscoveryStrategy#getDiscoveredInstances must be overridden by subclass");
	});

	it("#discoveryDone should throw Error", function() {
		(function() {
			discoveryStrategy.discoveryDone();
		}).should.Throw(Error, "DiscoveryStrategy#discoveryDone must be overridden by subclass");
	});
});

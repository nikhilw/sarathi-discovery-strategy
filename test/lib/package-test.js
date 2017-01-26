var chai = require("chai");
chai.should();

var Strategy = require("../../lib/index");

describe("discovery-strategy", function() {
	it("should export DiscoveryStrategy constructor directly from package.", function() {
		Strategy.should.be.a("function");
		Strategy.should.be.equal(Strategy.DiscoveryStrategy);
	});

	it("should export Strategy constructor", function() {
		Strategy.DiscoveryStrategy.should.be.a("function");
	});
});

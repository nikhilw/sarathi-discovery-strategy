function DiscoveryStrategy() {
}

DiscoveryStrategy.prototype.discoverInstances = function() {
    throw new Error("DiscoveryStrategy#discoverInstances must be overridden by subclass");
};

DiscoveryStrategy.prototype.discoveryDone = function() {
	throw new Error("DiscoveryStrategy#discoveryDone must be overridden by subclass");
};

DiscoveryStrategy.prototype.getDiscoveredInstances = function() {
	throw new Error("DiscoveryStrategy#getDiscoveredInstances must be overridden by subclass");
};

module.exports = DiscoveryStrategy;

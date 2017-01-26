function DiscoveryStrategy() {
}

DiscoveryStrategy.prototype.discoverInstances = function() {
    throw new Error("DiscoveryStrategy#discoverInstances must be overridden by subclass");
}

module.exports = DiscoveryStrategy;

# sarathi-discovery-strategy
An abstract class implementing Sarathi's discovery API.

## API
###getDiscoveredInstances
Return the array containing instance information of discovered instances. The format of these instance objects is:
```javascript
[{
    address: "", // ip address OR domain
    port: "", // port for use
    url: "" // form a url with the address and port and supported protocol, the protocol can be asked by the strategy, or decided, but the url should have it.
}]
```
###discoveryDone(callback: ```Function```)
Trigger the callback when discovery is done and instances are ready to be pulled. Only when the callback is invoked, any calls to the APIs will be triggered. If promise is already resolved, it should trigger the callback immediately.

###discoverInstances
Method that indicates that sarathi is configured and ready to start discovery of services.

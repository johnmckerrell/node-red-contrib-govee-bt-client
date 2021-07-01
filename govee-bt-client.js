module.exports = function (RED) {
    "use strict";

    const govee = require('govee-bt-client');

    function GoveeScanNode(config) {
        RED.nodes.createNode(this, config);

        let node = this;

        let discover = function (reading) {
            let msg = { payload: reading };
            node.send(msg);
        }
        govee.startDiscovery(discover)

        node.on('close', function () {
            govee.stopDiscovery();

            node.status({});
        });
    }
    RED.nodes.registerType("Govee Device", GoveeScanNode);
}

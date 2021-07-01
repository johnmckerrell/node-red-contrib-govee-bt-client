# node-red-contrib-govee-bt-client

This Node-Red module contains the "Govee Device" node that continously scans for broadcast messages from Govee BLE devices, using the [govee-bt-client](https://github.com/asednev/govee-bt-client) module (which uses the [noble](https://github.com/noble/noble) library).

## Installation

To install this module use Node-Red GUI installer or console command:

```
npm install node-red-contrib-govee-bt-client
```

This module requires the [govee-bt-client](https://github.com/asednev/govee-bt-client) module and [noble](https://github.com/noble/noble) library which will be installed automatically.  Take note about the requirements when [running on linux](https://github.com/noble/noble#running-on-linux).

## Usage

**Output message:** **msg.payload** contains the decoded information from the Govee device, e.g.:

```
{
  "uuid":"a1b2c3d4e5z6",
  "address":"00:1b:44:11:3a:b7",
  "model":"GVH5075_E79E",
  "battery":100,
  "humidity":68.6,
  "tempInC":20.2686,
  "tempInF":68.48348,
  "rssi":-75
}
```

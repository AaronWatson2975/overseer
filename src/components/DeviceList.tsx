import {
  Button,
  CircularProgress,
  List,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { IAndroidDevice } from "../interfaces";
import { Connection, AndroidDevice } from "../enums";
import { Device } from "./Device";
import { Promise } from "bluebird";

const remote = window.require("electron").remote;
const adb = remote.require("adbkit");

type DeviceListState = {
  devices: IAndroidDevice[];
  hasDevices: Boolean;
};

class DeviceList extends Component<{}, DeviceListState> {
  state: Readonly<DeviceListState> = {
    devices: [],
    hasDevices: false,
  };

  constructor(props: {}) {
    super(props);

    const client = adb.createClient();

    var that = this;
    this.setState({
      devices: [],
    });

    client.listDevices().then(function(devices: any) {
      return Promise.map(devices, function(device: any) {
        console.log(device);
      });
    });

    client
      .trackDevices()
      .then(function(tracker: any) {
        tracker.on("add", function(device: any) {
          //Get properties
          console.log("Device %s was plugged in", device.id);
          console.log(device);

          client.getProperties(device.id, (err: any, props: any) => {
            let serial = props["ro.boot.serialno"];
            let make = props["ro.product.manufacturer"];
            let model = props["ro.product.model"];
            let connection =
              serial === device.id ? Connection.USB : Connection.Network;

            let duplicate = false;
            let offline = false;

            let android: IAndroidDevice = {
              connection,
              make,
              model,
              serial,
              duplicate,
              offline,
              type: AndroidDevice.DevBoard,
              ip: "192.168.2.35",
            };

            let devices = that.state.devices;
            devices.push(android);
            that.setState({
              devices,
            });
            console.log(devices);
          });
        });
        tracker.on("remove", function(device: any) {
          console.log("Device %s was unplugged", device.id);
        });
        tracker.on("end", function() {
          console.log("Tracking stopped");
        });
      })
      .catch(function(err: any) {
        console.error("Something went wrong:", err.stack);
      });
  }

  public render() {
    return (
      <>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Connected Android Devices
            </ListSubheader>
          }
        >
          {!this.state.hasDevices && (
            <CircularProgress className="centered-progress" />
          )}
          {this.state.devices.map(device => (
            <Device key={device.serial} device={device} />
          ))}
          {this.state.hasDevices && this.state.devices.length === 0 && (
            <p>No devices detected</p>
          )}
        </List>
        {/* <Button variant="outlined" color="primary">
          Connect to IP
        </Button> */}
      </>
    );
  }
}

export { DeviceList };

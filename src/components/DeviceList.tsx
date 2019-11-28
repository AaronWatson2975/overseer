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
import { fetchAddress, validateIpAndPort } from "../tools";

const remote = window.require("electron").remote;
const adb = remote.require("adbkit");

type DeviceListState = {
  devices: IAndroidDevice[];
  hasDevices: boolean;
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

    client.listDevices().then(function(devices: any) {
      const promise = Promise.map(devices, function(device: any) {
        client.getProperties(device.id, (err: any, props: any) => {
          const android = that.convertDevice(device, props);
          that.addDevice(android);
        });
      });
      that.setState({
        hasDevices: true,
      });
      return promise;
    });

    client
      .trackDevices()
      .then(function(tracker: any) {
        tracker.on("add", function(device: any) {
          client.getProperties(device.id, (err: any, props: any) => {
            const android = that.convertDevice(device, props);
            that.addDevice(android);
          });
        });
        tracker.on("remove", function(device: any) {
          console.log(device);
          that.removeDevice(device.id);
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

  private convertDevice(device: any, props: any): IAndroidDevice {
    const serial = props["ro.boot.serialno"];
    const make = props["ro.product.manufacturer"];
    const model = props["ro.product.model"];
    const connection =
      serial === device.id ? Connection.USB : Connection.Network;

    const ip = validateIpAndPort(device.id) ? fetchAddress(device.id) : "";

    const offline = false;

    const android: IAndroidDevice = {
      connection,
      duplicate: false,
      ip,
      make,
      model,
      offline,
      serial,
      type: AndroidDevice.DevBoard,
    };

    android.duplicate = this.isDuplicate(android);

    return android;
  }

  private addDevice(device: IAndroidDevice): void {
    if (this.containsDevice(device, true)) {
      return;
    }

    let devices = this.state.devices;
    devices.push(device);
    this.setState({
      devices,
    });
  }

  private removeDevice(id: string): void {
    const devices = this.state.devices;

    const connectionType = validateIpAndPort(id)
      ? Connection.Network
      : Connection.USB;

    const ip = validateIpAndPort(id) ? fetchAddress(id) : "";

    const newDevices = devices.filter((device, index) => {
      if (
        connectionType === Connection.USB &&
        device.connection === Connection.USB
      ) {
        if (device.serial === id) {
          return false;
        }
      } else {
        if (device.ip === ip) {
          return false;
        } else {
          return true;
        }
      }
    });

    this.setState({
      devices: newDevices,
    });
  }

  private isDuplicate(device: IAndroidDevice): boolean {
    const devices = this.state.devices;

    devices.forEach(element => {
      if (
        device.make === element.make &&
        device.model === element.model &&
        element.connection === device.connection
      ) {
        return true;
      }
    });
    return false;
  }

  private containsDevice(device: IAndroidDevice, exactMatch: boolean): boolean {
    const devices = this.state.devices;

    devices.forEach(element => {
      if (device.serial === element.serial) {
        if (exactMatch) {
          if (
            device.connection === element.connection &&
            device.ip === element.ip
          ) {
            return true;
          }
        } else {
          return true;
        }
      }
    });
    return false;
  }
}

export { DeviceList };

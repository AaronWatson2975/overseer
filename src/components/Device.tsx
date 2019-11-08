import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  DeveloperBoard,
  NetworkWifi,
  PhoneAndroid,
  TabletAndroid,
  Usb,
} from "@material-ui/icons";
import React, { Component } from "react";
import { AndroidDevice, Connection } from "../enums";
import { IAndroidDevice } from "../interfaces";

interface IProps {
  device: IAndroidDevice;
}

/**
 * A single ListItem that displays the make, model, type,
 * connection type, and offline status of an Android device
 * connected over ADB.
 */
class Device extends Component<IProps> {
  public render() {
    let deviceIcon: JSX.Element = <PhoneAndroid />;
    let connectionIcon: JSX.Element = <Usb />;
    const deviceName = `${this.props.device.make} ${this.props.device.model} ${
      this.props.device.duplicate ? `(${this.props.device.serial})` : ""
    }${this.props.device.offline ? "  (Device is offline)" : ""}`;

    switch (this.props.device.type) {
      case AndroidDevice.Phone:
        deviceIcon = <PhoneAndroid />;
        break;

      case AndroidDevice.Tablet:
        deviceIcon = <TabletAndroid />;
        break;

      case AndroidDevice.DevBoard:
        deviceIcon = <DeveloperBoard />;
        break;
    }

    switch (this.props.device.connection) {
      case Connection.USB:
        connectionIcon = <Usb />;
        break;

      case Connection.Network:
        connectionIcon = <NetworkWifi />;
        break;
    }

    return (
      <ListItem button disabled={this.props.device.offline}>
        <ListItemIcon>{deviceIcon}</ListItemIcon>
        <ListItemText primary={deviceName} />
        <ListItemIcon>{connectionIcon}</ListItemIcon>
      </ListItem>
    );
  }
}

export { Device };

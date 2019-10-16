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

/**
 * A single ListItem that displays the make, model, type,
 * connection type, and offline status of an Android device.
 */
class Device extends Component<IAndroidDevice> {
  public render() {
    let deviceIcon: JSX.Element = <PhoneAndroid />;
    let connectionIcon: JSX.Element = <Usb />;
    const deviceName = `${this.props.make} ${this.props.model} ${
      this.props.duplicate ? `(${this.props.serial})` : ""
    }${this.props.offline ? "  (Device is offline)" : ""}`;

    switch (this.props.type) {
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

    switch (this.props.connection) {
      case Connection.USB:
        connectionIcon = <Usb />;
        break;

      case Connection.Network:
        connectionIcon = <NetworkWifi />;
        break;
    }

    return (
      <ListItem button disabled={this.props.offline}>
        <ListItemIcon>{deviceIcon}</ListItemIcon>
        <ListItemText primary={deviceName} />
        <ListItemIcon>{connectionIcon}</ListItemIcon>
      </ListItem>
    );
  }
}

export { Device };

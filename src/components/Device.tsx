import React, { Component } from "react";
import { AndroidDevice, Connection } from "../enums";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  PhoneAndroid,
  TabletAndroid,
  DeveloperBoard,
  NetworkWifi,
  Usb
} from "@material-ui/icons";

interface Props {
  make: string;
  model: string;
  serial: string;
  duplicate: boolean;
  type: AndroidDevice;
  connection: Connection;
}

class Device extends Component<Props> {
  render() {
    let deviceIcon: JSX.Element = <PhoneAndroid />;
    let connectionIcon: JSX.Element = <Usb />;
    const deviceName = `${this.props.make} ${this.props.model} ${this.props
      .duplicate && this.props.serial}`;

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
      <ListItem button>
        <ListItemIcon>{deviceIcon}</ListItemIcon>
        <ListItemText primary={deviceName} />
      </ListItem>
    );
  }
}

export { Device };

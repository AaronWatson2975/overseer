import React, { Component } from "react";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  PhoneAndroid,
  TabletAndroid,
  DeveloperBoard
} from "@material-ui/icons";
import { fetchDevices } from "../models";
import { Device } from "./Device";
import { IAndroidDevice } from "../interfaces";

interface Props {}

interface State {
  devices: IAndroidDevice[];
}

class DeviceList extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      devices: []
    };
  }

  componentDidMount() {
    fetchDevices().then(devices => {
      this.setState({ devices: devices });
    });
  }

  render() {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Connected Android Devices
          </ListSubheader>
        }
      >
        {this.state.devices.map(device => (
          <Device
            make={device.make}
            model={device.model}
            serial={device.serial}
            connection={device.connection}
            ip={device.ip}
            type={device.type}
            duplicate={device.duplicate}
          />
        ))}
      </List>
    );
  }
}

export { DeviceList };

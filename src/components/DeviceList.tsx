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

class DeviceList extends Component {
  state = {
    devices: []
  };

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
          <Device props={device} />
        ))}
      </List>
    );
  }
}

export { DeviceList };

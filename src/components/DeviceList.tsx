import React, { Component } from "react";
import {
  ListSubheader,
  List,
  CircularProgress,
  Button
} from "@material-ui/core";
import { fetchDevices } from "../models";
import { Device } from "./Device";
import { IAndroidDevice } from "../interfaces";

interface Props {}

interface State {
  devices: IAndroidDevice[];
  hasDevices: boolean;
}

class DeviceList extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      devices: [],
      hasDevices: false
    };
  }

  componentDidMount() {
    fetchDevices().then(devices => {
      this.setState({ devices: devices, hasDevices: true });
    });
  }

  render() {
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
            <Device
              make={device.make}
              model={device.model}
              serial={device.serial}
              connection={device.connection}
              ip={device.ip}
              type={device.type}
              duplicate={device.duplicate}
              offline={device.offline}
            />
          ))}
        </List>
        <Button variant="outlined" color="primary">
          Connect to IP
        </Button>
      </>
    );
  }
}

export { DeviceList };

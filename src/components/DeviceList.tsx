import {
  Button,
  CircularProgress,
  List,
  ListSubheader,
} from "@material-ui/core";
import React, { Component } from "react";
import { IAndroidDevice } from "../interfaces";
import { fetchDevices } from "../models";
import { Device } from "./Device";

interface IState {
  devices: IAndroidDevice[];
  hasDevices: boolean;
}

class DeviceList extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      devices: [],
      hasDevices: false,
    };
  }

  public componentDidMount() {
    fetchDevices().then(dev => {
      this.setState({ devices: dev, hasDevices: true });
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

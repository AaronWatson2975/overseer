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

interface IProps {
  devices: IAndroidDevice[];
  hasDevices: boolean;
}

class DeviceList extends Component<IProps> {
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
          {!this.props.hasDevices && (
            <CircularProgress className="centered-progress" />
          )}
          {this.props.devices.map(device => (
            <Device device={device} />
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

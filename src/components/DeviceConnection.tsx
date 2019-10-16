import { Button, Input, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { ICommunicator } from "../interfaces";

interface IProps {
  communicator: ICommunicator;
}

interface IState {
  address: string;
}

class DeviceConnection extends Component<IProps, IState> {
  public state = {
    address: "",
  };

  public render() {
    return (
      <>
        <TextField
          className="full-width"
          placeholder="E.g. 192.168.2.43:5555"
          label="Device Address"
          value={this.state.address}
          onChange={e => this.setState({ address: e.target.value })}
          margin="normal"
        />
        <div>
          <Button variant="outlined" className="full-width" color="primary">
            Connect
          </Button>
        </div>
      </>
    );
  }
}

export { DeviceConnection };

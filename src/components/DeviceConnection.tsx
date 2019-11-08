import Joi, { ValidationError } from "@hapi/joi";
import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { ICommunicator } from "../interfaces";
import { MockCommunicator } from "../models";

interface IProps {
  communicator: ICommunicator;
}

interface IState {
  address: string;
  error: string;
}

const schema = Joi.string().ip({
  cidr: "forbidden",
  version: ["ipv4", "ipv6"],
});

class DeviceConnection extends Component<IProps, IState> {
  public state = {
    address: "",
    error: "",
  };

  public render() {
    return (
      <>
        <TextField
          className="full-width"
          placeholder="E.g. 192.168.2.43"
          label={
            this.state.error ? `Error: ${this.state.error}` : "Device Address"
          }
          error={this.state.error ? true : false}
          value={this.state.address}
          onChange={e => this.setState({ address: e.target.value })}
          margin="normal"
        />
        <div>
          <Button
            variant="outlined"
            className="full-width"
            color="primary"
            onClick={() => {
              const result = schema.validate(this.state.address);
              if (result.error) {
                this.setState({ error: result.error.message });
              } else {
                this.setState({ error: "" }, () =>
                  this.props.communicator.connect(this.state.address)
                );
              }
            }}
          >
            Connect
          </Button>
        </div>
      </>
    );
  }
}

export { DeviceConnection };

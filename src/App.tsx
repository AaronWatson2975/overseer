import { CssBaseline } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { DeviceConnection } from "./components/DeviceConnection";
import { MockCommunicator } from "./models";
import "./stylesheets/Main.scss";

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
    type: "light",
  },
});

const COMMUNICATOR = new MockCommunicator();

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <DeviceList devices={[]} hasDevices={true} /> */}
        <DeviceConnection communicator={COMMUNICATOR} />
      </ThemeProvider>
    </>
  );
};

export default App;

import { CssBaseline } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { DeviceConnection, DeviceList } from "./components";
import { MockCommunicator } from "./models";
import "./stylesheets/Main.scss";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    type: "dark",
  },
});

const COMMUNICATOR = new MockCommunicator();

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DeviceList />
        {/* <DeviceConnection communicator={COMMUNICATOR} /> */}
      </ThemeProvider>
    </>
  );
};

export default App;

import { CssBaseline } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { DeviceList } from "./components/DeviceList";
import "./stylesheets/Main.scss";

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
    type: "dark",
  },
});

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DeviceList devices={[]} hasDevices={true} />
      </ThemeProvider>
    </>
  );
};

export default App;

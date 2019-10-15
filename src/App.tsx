import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DeviceList } from "./components/DeviceList";
import "./stylesheets/Main.scss";
import {
  useTheme,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { pink, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
    type: "dark"
  }
});

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DeviceList />
      </ThemeProvider>
    </>
  );
};

export default App;

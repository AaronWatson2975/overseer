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

function WithTheme() {
  const theme = useTheme();
  const primaryText = theme.palette.text.primary;
  const primaryColor = theme.palette.primary.main;

  const styles = {
    primaryText: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(1, 2),
      color: primaryText
    },
    primaryColor: {
      backgroundColor: primaryColor,
      padding: theme.spacing(1, 2),
      color: theme.palette.common.white
    }
  };

  return <DeviceList />;
}

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
    type: "light"
  }
});

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WithTheme />
      </ThemeProvider>
    </>
  );
};

export default App;

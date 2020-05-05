import React, { Component } from "react";
import { render } from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hello from "./Hello";
import AppContainer from "./container/AppContainer";
import "./style.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    htmlFontSize: 1,
    fontSize: 0.8
  }
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
        <AppContainer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
render(<App />, document.getElementById("root"));

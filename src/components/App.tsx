import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";

import Routes from "routes/";
import myTheme from "general/theme";

const App = () => (
    <>
        <MuiThemeProvider theme={myTheme}>
            <ThemeProvider theme={myTheme}>
                <CssBaseline />
                <StylesProvider injectFirst>
                    <Router >
                        <Routes />
                    </Router>
                </StylesProvider>
            </ThemeProvider>
        </MuiThemeProvider>
    </>
);

export default App;

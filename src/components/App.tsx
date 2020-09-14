import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';

const App = () => (
    <>
        <CssBaseline />
        <StylesProvider injectFirst>
            <Router>
                <Routes />
            </Router>
        </StylesProvider>
    </>
);

export default App;

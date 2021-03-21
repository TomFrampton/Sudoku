import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';

import * as serviceWorkerRegistration from './core/serviceWorkerRegistration';
import reportWebVitals from './core/reportWebVitals';

import { Grid } from './components';

import { GlobalStyles, defaultTheme, Card, Content, Title } from './styles';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Content data-cy="content">
                <Title data-cy="title">Tom's Sudoku App</Title>
                <Card data-cy="card">
                    <Grid></Grid>
                </Card>
            </Content>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyles from './styles/generic/Reset';
import themes from './styles/themes/styles';
import Base from './styles/elements/Base';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Base>
        <Routes />
      </Base>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

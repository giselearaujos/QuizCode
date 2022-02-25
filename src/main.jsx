import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/generic/Reset';
import themes from './styles/themes/styles';
import Base from './styles/elements/Base';
import Card from './components/Card/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Base>
        <Card></Card>
      </Base>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

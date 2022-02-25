import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/generic/Reset';
import themes from './styles/themes/styles';
import Base from './styles/elements/Base';
import Card from './components/Card/styles';
import Title from './components/Title/styles';
import Widget from './components/Widget/styles';
import Input from './components/Input/styles';
import Button from './components/Button/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Base>
        <Card>
          <Title>QuizCODE</Title>
          <Widget>
            <Input placeholder="Nome" />
            <Button>Entrar</Button>
          </Widget>
        </Card>
      </Base>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

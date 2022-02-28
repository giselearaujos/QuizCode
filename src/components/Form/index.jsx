import React from 'react';
import FormStyled from './styles';
import Button from '../Button/styles';
import Input from '../Input/styles';

const Form = () => {
  return (
    <FormStyled action="/quiz">
      <Input placeholder="Nome" />
      <Button type="submit" marginBottom="35px">
        Entrar
      </Button>
    </FormStyled>
  );
};

export default Form;

import React from 'react';
//import {} from 'react-router-dom';
import FormStyled from './styles';
import Button from '../Button/styles';
import Input from '../Input/styles';

const Form = () => {
  return (
    <FormStyled>
      <Input placeholder="Nome" />
      <Button type="submit">Entra</Button>
    </FormStyled>
  );
};

export default Form;

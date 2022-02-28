import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStyled from './styles';
import Button from '../Button/styles';
import Input from '../Input/styles';

const Form = () => {
  const [userName, setUserName] = useState('');
  const navigateTo = useNavigate();

  const handleUserRedirect = () => navigateTo(`/quiz/${userName}`);

  return (
    <FormStyled>
      <Input
        placeholder="Name"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <Button
        type="submit"
        marginBottom="35px"
        disabled={!userName}
        onClick={handleUserRedirect}
      >
        Start
      </Button>
    </FormStyled>
  );
};

export default Form;

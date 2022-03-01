import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Button } from '../../components';
import FormStyled from '../../components/Form/styles';

const Result = ({ score }) => {
  const navigateTo = useNavigate();
  const handleUserRedirect = () => navigateTo('/');

  return (
    <div>
      <Text fontSize="18px" marginTop="25px">
        Your result is {score}/10
      </Text>
      <FormStyled>
        <Button type="submit" marginBottom="35px" onClick={handleUserRedirect}>
          Return
        </Button>
      </FormStyled>
    </div>
  );
};

export default Result;

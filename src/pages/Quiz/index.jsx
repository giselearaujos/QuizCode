import React from 'react';
import Card from '../../components/Card/styles';
import QuizHeader from '../../components/QuizHeader/styles';
import Title from '../../components/Title/styles';

const Quiz = () => {
  return (
    <Card height="80%">
      <QuizHeader>
        <Title fontSize="20px" marginTop="25px">
          QuizCode
        </Title>
        <Title fontSize="20px" marginTop="25px">
          Gisele
        </Title>
      </QuizHeader>
    </Card>
  );
};

export default Quiz;

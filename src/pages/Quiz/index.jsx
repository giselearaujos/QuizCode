import React from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestion from '../../components/QuizQuestion';
import { Card, QuizHeader, Title } from '../../components';

const Quiz = () => {
  const { name } = useParams();

  return (
    <Card height="80%">
      <QuizHeader>
        <Title fontSize="20px" marginTop="25px">
          QuizCode
        </Title>
        <Title fontSize="20px" marginTop="25px">
          {name}
        </Title>
      </QuizHeader>
      <QuizQuestion />
    </Card>
  );
};

export default Quiz;

import React from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestion from '../../components/QuizQuestion';
import { Card, QuizHeader, Text } from '../../components';

const Quiz = () => {
  const { name } = useParams();

  return (
    <Card height="80%">
      <QuizHeader>
        <Text fontSize="20px" marginTop="25px">
          QuizCode
        </Text>
        <Text fontSize="20px" marginTop="25px">
          {name}
        </Text>
      </QuizHeader>
      <QuizQuestion />
    </Card>
  );
};

export default Quiz;

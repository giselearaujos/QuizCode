import React from 'react';
import { Card, QuizHeader, Score } from '../../components';

const Result = () => {
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
      <Score>
        <Title fontSize="15px" marginTop="25px">
          RESULT 1/10
        </Title>
      </Score>
    </Card>
  );
};

export default Result;

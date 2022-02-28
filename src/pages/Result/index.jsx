import React from 'react';
import Card from '../../components/Card/styles';
import QuizHeader from '../../components/QuizHeader/styles';
import Score from '../../components/Score/styles';

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

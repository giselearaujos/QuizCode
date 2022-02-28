import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/styles';
import QuizHeader from '../../components/QuizHeader/styles';
import QuizQuestion from '../../components/QuizQuestion';
import Score from '../../components/Score/styles';
import Title from '../../components/Title/styles';

const Quiz = () => {
  const { name } = useParams();
  console.log(name);
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
      <Score>
        <Title fontSize="15px" marginTop="25px">
          SCORE 1/10
        </Title>
      </Score>
      <QuizQuestion />
    </Card>
  );
};

export default Quiz;

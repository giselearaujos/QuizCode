import React from 'react';
import Card from '../../components/Card/styles';
import Title from '../../components/Title/styles';
import Form from '../../components/Form/index';

const Home = () => {
  return (
    <Card height="65%">
      <Title fontSize="30px" marginTop="94px">
        QuizCODE
      </Title>
      <Form />
    </Card>
  );
};

export default Home;

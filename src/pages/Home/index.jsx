import React from 'react';
import Card from '../../components/Card/styles';
import Title from '../../components/Title/styles';
import Widget from '../../components/Widget/styles';
import Input from '../../components/Input/styles';
import Button from '../../components/Button/styles';

const Home = () => {
  return (
    <Card>
      <Title>QuizCODE</Title>
      <Widget onSubmit="">
        <Input placeholder="Nome" />
        <Button type="submit">Entra</Button>
      </Widget>
    </Card>
  );
};

export default Home;

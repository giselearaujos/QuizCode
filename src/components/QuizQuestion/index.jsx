import React, { useEffect, useState } from 'react';
import { Text, QuizHeader, QuizQuestionStyle, Loading } from '../../components';
import api from '../../service/api';
import Result from '../../pages/Result';
import { useParams } from 'react-router-dom';

const QuizQuestion = () => {
  const { name } = useParams();
  const [questions, setQuestions] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const url =
    'questions?apiKey=ovQOfdSUzLs6OW46gMXr7bEjdqyoptJ4R3Ji9zBY&category=code&difficulty=Easy&limit=10&tags=HTML';

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  const handleUserAnswer = (answer) => () => {
    setScore((score) => {
      if (
        questions[currentQuestion].correct_answers[answer + '_correct'] ==
        'true'
      ) {
        return score + 1;
      }
      return score;
    });
    setCurrentQuestion((currentQuestion) => {
      if (questions.length - 1 > currentQuestion) return currentQuestion + 1;
      return -1;
    });
  };

  if (!questions) {
    return <Loading>...</Loading>;
  }

  if (currentQuestion == -1) {
    return <Result userName={name} score={score} />;
  }

  return (
    <QuizQuestionStyle>
      <QuizHeader>
        <Text fontSize="15px" marginTop="25px">
          Question {currentQuestion + 1}/10
        </Text>
        <Text fontSize="15px" marginTop="25px">
          SCORE {score}
        </Text>
      </QuizHeader>
      <QuizQuestionStyle.Text>
        {questions[currentQuestion].question}
      </QuizQuestionStyle.Text>
      {Object.entries(questions[currentQuestion].answers)
        .filter(([key, value]) => value)
        .map(([key, value]) => (
          <QuizQuestionStyle.Alternatives
            key={key}
            onClick={handleUserAnswer(key)}
          >
            {value}
          </QuizQuestionStyle.Alternatives>
        ))}
    </QuizQuestionStyle>
  );
};

export default QuizQuestion;

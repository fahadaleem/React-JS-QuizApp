import React, { useState } from "react";
import "./styles.css";
import Data from "./QuizData";

const Button = (props) => {
  return (
    <button className="option-button" onClick={props.handlePickAnswer}>
      {props.option}
    </button>
  );
};

const Question = (props) => {
  return <h2>{props.question}</h2>;
};

const QuizApp = () => {
  let [count, setCount] = useState(0);
  let [quizData, setQuizData] = useState(Data[count]);
  let [score, setScore] = useState(0);

  const handleCheckAnswer = (e) => {
    const ans = e.target.textContent;
    count++;
    setQuizData(Data[count]);
    setCount(count);
    console.log(quizData.correctAns);
    if (ans === quizData.correctAns) {
      setScore(score + 1);
    }
  };

  if (Data.length !== count) {
    console.log(quizData);
    return (
      <div className="container">
        <div className="left">
          <h2>
            Question {quizData.id + 1}/{Data.length}
          </h2>
          <Question question={quizData.question} />
        </div>
        <div className="right">
          {quizData.choices.map((cur, index) => (
            <Button
              option={cur}
              handlePickAnswer={handleCheckAnswer}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <h1>You scored : {score}</h1>;
  }
};

export default function App() {
  return (
    <div className="App">
      <QuizApp />
    </div>
  );
}

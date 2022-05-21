/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { $Answer } from "./styles";

export const Answer = ({
  text,
  isCorrectAnswer,
  disabled,
  callbackDisabled,
  index,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  const { user, setUser } = useContext(UserContext);

  function handleAnswer() {
    console.log(isCorrectAnswer);
    isCorrectAnswer
      ? setUser({ ...user, correct: user.correct + 1, done: user.done + 1 })
      : setUser({ ...user, done: user.done + 1 });
    setSelectedAnswer(index);
    callbackDisabled();
  }

  return (
    <$Answer index={index} selectedAnswer={selectedAnswer} isCorrectAnswer={isCorrectAnswer}>
      <button onClick={handleAnswer} disabled={disabled}>
        {text}
      </button>
    </$Answer>
  );
};

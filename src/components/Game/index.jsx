/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Question } from "../Question";
import { $Game, $Header } from "./style";

export const Game = () => {
  /*const URL = `${process.env.REACT_APP_API_BASE_URL}`;

    const promise = axios.get(URL)
    promise.then((res) => console.log(res.data))*/

  const { user } = useContext(UserContext);

  const [questions, setQuestions] = useState([
    {
      title: "Titulo pergunta 1",
      answers: [
        {
          text: "texto da resposta 1",
          isCorrectAnswer: true,
        },
        {
          text: "texto da resposta 2",
          isCorrectAnswer: false,
        },
      ],
    },
    {
      title: "Titulo pergunta 2",
      answers: [
        {
          text: "texto da resposta 1",
          isCorrectAnswer: false,
        },
        {
          text: "texto da resposta 2",
          isCorrectAnswer: true,
        },
      ],
    },
  ]);
  const total = Math.round(((user.correct / user.done) * 100).toFixed(2));
  return (
    <>
      <$Header>
        <img src="https://i.ibb.co/XX6BJFz/blackcat.png" alt="" />
        <h1>Triolinguo</h1>
      </$Header>

      <$Game>
        <h1>
          Você selecionou a categoria: <span>'title'!</span>
        </h1>
        <article>
          {questions.map((question, i) => {
            return (
              <Question
                key={i}
                title={question.title}
                answers={question.answers}
              />
            );
          })}
        </article>
        {questions.length === user.done && (
          <span>Você acertou {total}% das respostas!</span>
        )}
      </$Game>
    </>
  );
};

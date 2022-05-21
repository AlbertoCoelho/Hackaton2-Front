/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Question } from "../Question";
import { $Game, $Header, $Result, $FinalButtons } from "./style";

export const Game = () => {

    const { user, setUser } = useContext(UserContext)
    const [questions, setQuestions] = useState([])
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    const URL = `${process.env.REACT_APP_API_BASE_URL}/${user.type}`;
    useEffect(() => {
        const promise = axios.get(URL)
        promise.then(({ data }) => {
            console.log(data)
            setQuestions(data.questions)
            setData(data)
        })
    }, [])

  const total = Math.round(((user.correct / user.done) * 100).toFixed(2));
  const navigate = useNavigate();

  function restart() {
    setUser({ ...user, done: 0, correct: 0 });
    setReload(!reload);
  }
  function backToMain() {
    setUser({ ...user, done: 0, correct: 0 });
    navigate("/");
  }
  
    if (!questions) {
        return <></>
    }

    return (
        <>
            <$Header> <img src="https://i.ibb.co/XX6BJFz/blackcat.png" alt="" /> <h1>Triolinguo</h1>  </$Header>
            <$Game>
                <h1>Você selecionou a categoria {data.title}!</h1>
                <article>
                    {questions.map((question, i) => {
                        return (
                            <Question
                                key={i}
                                title={question.title}
                                answers={question.answers} />
                        )
                    })}
                </article>
                {questions.length === user.done && total > 49 && (
                    <$Result>
                        <img
                            src="https://c.tenor.com/qvB6zgky8XEAAAAi/animal-kitty.gif"
                            alt=""
                            srcSet=""
                        />
                        <div>
                            <p>Você acertou </p>
                            <span>{total}%</span>
                            <p> das respostas!</p>
                        </div>
                    </$Result>
                )}
                {questions.length === user.done && total <= 49 && (
                    <$Result>
                        <img
                            src="https://c.tenor.com/aTtU5YyfwgQAAAAi/cartoon-cat.gif"
                            alt=""
                            srcSet=""
                        />
                        <div>
                            <p>Você acertou </p>
                            <span>{total}%</span>
                            <p> das respostas!</p>
                        </div>
                    </$Result>
                )}
                {questions.length === user.done && (
          <>
            <$FinalButtons>
              <button onClick={restart}>Refazer Teste</button>
              <button onClick={backToMain}>Escolher outro Teste</button>
            </$FinalButtons>
          </>
        )}
            </$Game>
        </>
    )
}

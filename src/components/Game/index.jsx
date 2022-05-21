/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import axios from "axios";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Question } from "../Question"
import { $Game } from "./style"

export const Game = () => {

    /*const URL = `${process.env.REACT_APP_API_BASE_URL}`;

    const promise = axios.get(URL)
    promise.then((res) => console.log(res.data))*/

    const { user, setUser } = useContext(UserContext)
    const [reload, setReload] = useState(false)

    const [questions, setQuestions] = useState([
        {
            title: 'Titulo pergunta 1',
            answers: [
                {
                    text: 'texto da resposta 1',
                    isCorrectAnswer: true
                },
                {
                    text: 'texto da resposta 2',
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: 'Titulo pergunta 2',
            answers: [
                {
                    text: 'texto da resposta 1',
                    isCorrectAnswer: false
                },
                {
                    text: 'texto da resposta 2',
                    isCorrectAnswer: true
                }
            ]
        },
        {
            title: 'Titulo pergunta 3',
            answers: [
                {
                    text: 'texto da resposta 1',
                    isCorrectAnswer: false
                },
                {
                    text: 'texto da resposta 2',
                    isCorrectAnswer: true
                }
            ]
        }
    ])

    const total = Math.round(((user.correct) / (user.done) * 100).toFixed(2))
    const navigate = useNavigate()

    function restart() {
        setUser({ ...user, done: 0, correct: 0 })
        setReload(!reload)
    }
    function backToMain() {
        setUser({ ...user, done: 0, correct: 0 })
        navigate('/')
    }

    return (
        <$Game>
            <h1>Você selecionou a categoria 'title'!</h1>
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
            {questions.length === user.done &&
                <>
                    <span>Você acertou {total}% das respostas!</span>
                    <div>
                        <button onClick={restart} >Refazer Teste</button>
                        <button onClick={backToMain} >Escolher outro Teste</button>
                    </div>
                </>
            }
        </$Game>
    )
}
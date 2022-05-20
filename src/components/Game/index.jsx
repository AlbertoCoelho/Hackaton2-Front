/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import { useState } from "react"
import { Question } from "../Question"
import { $Game } from "./style"

export const Game = () => {

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
        }
    ])

    return(
        <$Game>
            <h1>Você selecionou a categoria 'title'!</h1>
            <article>
                {questions.map((question, i) => {
                    return(
                        <Question 
                        key={i} 
                        title={question.title}
                        answers={question.answers} />
                    )
                })}
            </article>
        </$Game>
    )
}
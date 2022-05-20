/* eslint-disable react/jsx-pascal-case */
import { Answer } from "../Answer"
import { $Question } from "./style"

export const Question = ({ title, answers }) => {
    return (
        <$Question>
            <h2>{title}</h2>
            {answers.map((answer, i) => {
                return (
                    <Answer
                        key={i}
                        text={answer.text}
                        isCorrectAnswer={answer.isCorrectAnswer}
                    />
                )
            })}
        </$Question>
    )
}
/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { Answer } from "../Answer"
import { $Question } from "./style"

export const Question = ({ title, answers }) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [disabled, setDisabled] = useState(false);

    function callbackDisabled() {
        setDisabled(true)
    }

    return (
        <$Question>
            <h2>{title}</h2>
            {answers.map((answer, i) => {
                return (
                    <Answer
                        selectedAnswer={selectedAnswer}
                        setSelectedAnswer={setSelectedAnswer}
                        key={i}
                        index={i}
                        text={answer.text}
                        isCorrectAnswer={answer.isCorrectAnswer}
                        disabled={disabled}
                        callbackDisabled={() => callbackDisabled()}
                    />
                )
            })}
        </$Question>
    )
}
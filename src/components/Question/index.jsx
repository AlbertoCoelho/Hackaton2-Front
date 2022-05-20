import { useState } from "react";
import { Answer } from "../Answer"

export const Question = ({ title, answers }) => {

    const [disabled, setDisabled] = useState(false);

    function callbackDisabled() {
        setDisabled(true)
    }

    return (
        <div>
            <h2>{title}</h2>
            {answers.map((answer, i) => {
                return (
                    <Answer
                        key={i}
                        text={answer.text}
                        isCorrectAnswer={answer.isCorrectAnswer}
                        disabled={disabled}
                        callbackDisabled={() => callbackDisabled()}
                    />
                )
            })}
        </div>
    )
}
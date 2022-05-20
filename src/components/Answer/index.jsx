/* eslint-disable react/jsx-pascal-case */
import { $Answer } from "./styles"

export const Answer = ({ text, isCorrectAnswer }) => {

    function handleAnswer() {
        console.log(isCorrectAnswer)
    }

    return (
        <$Answer onClick={handleAnswer}>
            <span  >{text}</span>
        </$Answer>
    )
}
/* eslint-disable react/jsx-pascal-case */
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { $Answer } from "./styles"

export const Answer = ({ text, isCorrectAnswer, disabled, callbackDisabled }) => {

    const { user, setUser } = useContext(UserContext)
    const [color, setColor] = useState("")

    function handleAnswer() {
        console.log(isCorrectAnswer)
        isCorrectAnswer ?
            setUser({ ...user, correct: user.correct + 1, done: user.done + 1 }) :
            setUser({ ...user, done: user.done + 1 })
        callbackDisabled()
    }

    return (
        <$Answer status={color}>
            <button onClick={handleAnswer} disabled={disabled} >{text}</button>
        </$Answer>
    )
}
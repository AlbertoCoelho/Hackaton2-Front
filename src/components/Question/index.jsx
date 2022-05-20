import { Answer } from "../Answer"

export const Question = ({ title, answers }) => {
    return (
        <div>
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
        </div>
    )
}
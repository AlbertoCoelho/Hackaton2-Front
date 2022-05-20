export const Answer = ({ text, isCorrectAnswer }) => {

    function handleAnswer() {
        console.log(isCorrectAnswer)
    }

    return (
        <div>
            <span onClick={handleAnswer} >{text}</span>
        </div>
    )
}
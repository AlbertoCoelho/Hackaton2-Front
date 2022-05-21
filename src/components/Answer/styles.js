import styled from "styled-components";

export const $Answer = styled.span`
background-color: bisque;
width: 320px;
height: 70px;
position: relative;
border: 3px solid;
border-color: black;
border-color: ${props => {
    if (props.selectedAnswer === props.index && props.isCorrectAnswer) {
      return "green";
    } else if (props.selectedAnswer === props.index && !props.isCorrectAnswer) {
      return "red";
    } else {
      return "black";
    }
  }};
border-radius: 180px;
display: flex;
align-items: center;
justify-content: center;
position: relative;


button{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 180px;
    border: none;
    background-color: ${props =>
      props.selectedAnswer === props.index ? "#FFCCCC" : "bisque"};

}

`
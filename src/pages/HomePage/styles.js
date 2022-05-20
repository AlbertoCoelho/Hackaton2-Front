import styled from "styled-components";

export const $Container = styled.div`
width: 100vw;
height: 100vh;
max-width: 375px;
margin: auto;
`

export const $Main = styled.main`

    img{
        width: 150px;
        margin-bottom: 10px;
    }

    h1{
        margin-bottom: 70px;
        font-size: 40px;
        font-family: Arial, Helvetica, sans-serif;
    }

    span{
        display: flex;
        justify-content: space-evenly;
        width: 100%;

        button{
            height: 40px;
            width: 80px;
            background-color: #404040;
            color: white;
            cursor: pointer;
            &:hover{
                
            }
        }
    }
height: 100%;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;


`
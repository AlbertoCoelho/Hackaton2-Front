import styled from 'styled-components';

export const $Game = styled.div`
max-width: 375px;
margin: auto;

h1{
    margin-left: 5px;
    font-size: 23px;
    margin-bottom: 15px;
        span{
            text-decoration: underline;
            font-weight: bold;
        }
}

article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`

export const $Header = styled.div`
position: sticky;
top: 0;
left: 0;
height: 50px;
min-width:375px;
background-color: lightslategrey;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    
    img{
        width: 40px;
    }

    h1{
        font-size: 30px;
    }
`

export const $Result = styled.div`
width: 300px;
height: 150px;
margin-left: 35px;
display: flex;
border: 1px inset darkgrey;
img{
    width: 150px;
    margin-left: 0px;
}
div{
    margin-top: 15px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span{
        font-weight: bold;
        font-size: 50px;
        color: darkmagenta;
    }
}
`

export const $FinalButtons = styled.div`
max-width: 300px;
margin-top: 15px;
margin-left: 35px;
display: flex;
justify-content: space-between;
align-items: center;

button{
    height: 40px;
    border-radius: 20px;
    width: 135px;
    background-color: #404040;
    color: white;
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    border: 1px outset black;

    &:hover{
        background-color: white;
        color: #404040;
    }
}
`
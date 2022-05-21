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
margin-left: 24px;
display: flex;
img{
    width: 150px;
    margin-left: -15px;
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
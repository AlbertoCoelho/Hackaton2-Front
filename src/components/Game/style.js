import styled from 'styled-components';

export const $Game = styled.div`
padding: 0 15px;
h1{
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
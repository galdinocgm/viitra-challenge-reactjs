import styled from 'styled-components'

export const FoodSpecificsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #a37de8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FoodSpecificsCard = styled.div`
    width: 32%;
    height: 80%;
    border: solid 10px #5fe362;
    border-radius: 20px;
    background-color: #cbf5cc;
    
    .img-top-container{
        width: 100%;
        height: 40%;
    }

    .img-top-container img{
        width: 100%;
        height: 100%;
    }

    .middle-container{
        height: 60%;
        width: 100%;
        background-color: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .middle-container h1,h2{
        color: black;
    }

    .middle-container h1{
        font-size: 2rem;
        margin: 1rem 0 3rem 0;
    }

    .middle-container h2{
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    .middle-container h2 img{
        position: relative;
        top: 0.5rem;
        padding: 0 1rem;
    }
`;
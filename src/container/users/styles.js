import styled from 'styled-components'
import backgraound from '../../assets/background1.svg'

export const Container = styled.div`
    background: url("${backgraound}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
    
`

export const Image = styled.img`
    margin-top: 30px;
`

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    backdrop-filter: blur(45px);

    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 100%;
    min-height: calc(100vh - 170px);
    
`

export const Title = styled.h1`
    font-style: normal;
    font-size: 34px;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 50px;


`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;

    border-radius: 14px ;
    background: transparent;

    font-size: bold;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    border: solid 1px #FFFFFF;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    img {
        transform: rotate(180deg);
    }
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;  
    align-items: center;
    background: #FFFFFF40;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 342px;
    height: 58px;
    outline: none;
    border: none;
    margin-top: 20px;

    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 28.13px;
        color: #ffffff;
    }


button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
}

`


import styled from 'styled-components'
import backgraound from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${backgraound}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
    
`
export const Image = styled.img`
    margin-top: 30px;
`


export const InputLabel = styled.p`
    letter-spacing: -0.40799999237060547px;
    font-style: normal;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #eeeeee;

    margin-left: 20px;
    


`
export const Input = styled.input`
    background: #FFFFFF40;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 342px;
    height: 58px;
    outline: none;
    border: none;
    padding-left: 20px;
        
    font-size: 18px;
    
    line-height: 28.13px;
    color: #FFFFFF;
    

    margin-bottom: 34px;



`



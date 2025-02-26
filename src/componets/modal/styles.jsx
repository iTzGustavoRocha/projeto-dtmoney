import styled from "styled-components";

export const background = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgb(0,0,0, 0.7);
    z-index: 1000;
    
    


`;


export const Container = styled.div`
    display: inline-block;
    position: fixed;
        top: 50%;
        left: 50%;
    width: 35%;
    height: 75%;
    transform: translate(-50%,-50%);
    background-color: #202024;
    border-radius: 7px;
    box-shadow: 0 4px 8px rgb(0, 0, 0, 1);
`;

export const Header = styled.div`
    display: flex;
    margin: 25px 20px;
    width: 100%
    height:110px;
`

export const Title = styled.p`
    
    color: #e1e1e6;
    flex:70%;
    white-space: nowrap; 
    font-size: 22px;
    font-weight: 600;


`;

export const Close = styled.button`
    
    background: none;
    font-size: 16px;
    border: none;
    color: #7C7C8A;
    max-height: 30px;
    max-width: 30px;
    margin-top: -15px;
    margin-right: -10px;    
    border-radius: 7px;
    text-align: center;
    justify-content: center;
    transition: all 0.1s linear; 
    flex: 30%;
    
    &:hover{
        background: #121214;

    }
`
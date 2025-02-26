import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
    background: #121214;
    


`;

export const Header = styled.div`
    display: flex;
`;

export const Title = styled.h1`
    margin: 20px;
    flex:70%;
    color: #fff;
    
`;

export const NewTransactionButton = styled.button`
    color: white;
    background: #00875f;
    max-height: 50px;
    max-width: 150px;
    margin-top:20px;
    margin-right:20px;
    border-radius: 6px;
    border-style: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.2s linear;
    cursor: pointer;
    flex:30%;

    &:hover{
        background: #00b37e;
    }

    
    
    
    

`;


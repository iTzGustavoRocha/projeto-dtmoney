<<<<<<< HEAD
import React from 'react'


const Header = () => {
    return(
        <div className="header">
             <h1 className="DTMoney">DT Money</h1>
            <button onClick={() => setOpenModal(true)} className="BotaoNovaTransacao" >Nova transação</button>        
        </div>
=======
import { useState } from 'react'
import * as C from "./styles";


const Header = ({setOpenModal}) => {

   
    return (

        <C.Container>
            <C.Header>
                <C.Title>DT Money</C.Title>
                <C.NewTransactionButton onClick={() => setOpenModal(true)}>Nova Transação</C.NewTransactionButton>
            </C.Header>
        </C.Container>





>>>>>>> 7bd0be5 (refeito styled-components)
    )
}

export default Header;
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





    )
}

export default Header;
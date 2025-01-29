import React from 'react'


const Header = () => {
    return(
        <div className="header">
             <h1 className="DTMoney">DT Money</h1>
            <button onClick={() => setOpenModal(true)} className="BotaoNovaTransacao" >Nova transação</button>        
        </div>
    )
}

export default Header;
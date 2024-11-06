import React from "react";
import "./DTMoney.css";




function DTMoney(){
    return(
       
        <div>
            <div className="header">
                <h1 className="DTMoney">DT Money</h1>
                <button className="BotaoNovaTransacao" type="submit" >Nova transação</button>
            </div>
            <div className="movimentacoes">
                <div className="entradas" >
                    
                    <h5 className="textEntrada">entradas </h5>
                    <p>{}</p>
                    
                    

                </div>
                <div  className="saidas">
                    <span className="textSaidas">saidas</span>
                </div>
                <div className="total">
                    <span className="textTotal">Total</span>
                </div>
            </div>
            <form action="">
                <input type="text" placeholder="Busque uma transação"/>
                <button type="submit"> buscar</button>
            </form>
            <div className="ListaTransacoes">
                <span>transação de exemplo</span>

            </div>
        </div>
    )
}

export default DTMoney

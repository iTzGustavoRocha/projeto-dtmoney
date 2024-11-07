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
                    
                    <h2 className="textEntrada">Entradas &#11141; </h2>
                    <p>R$17.400,00</p>
                    
                    

                </div>
                <div  className="saidas">
                    <h2 className="textSaidas">saidas  &#11141;</h2>
                    <p>R$1.400,00</p>

                </div>

                <div className="total">
                    <h2 className="textTotal">Total  &#11141;</h2>
                    <p>R$16.456,00</p>

                </div>
            </div>
            <form action="">
                <input className="barraPesquisaTransacao" type="text" placeholder="Busque uma transação"/>
                <button className="botaoBuscarTransacao" type="submit"> buscar</button>
            </form>
            <div className="ListaTransacoes">
                <span>transação de exemplo</span>

            </div>
        </div>
    )
}

export default DTMoney

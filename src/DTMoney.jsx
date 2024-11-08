import React from "react";
import "./DTMoney.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";






function DTMoney(){
    return(
       
        <div>
            <div className="header">
                <h1 className="DTMoney">DT Money</h1>
                <button className="BotaoNovaTransacao" type="submit" >Nova transação</button>
            </div>
            <div className="movimentacoes">
                <div className="entradas" >
                    
                    <h2 className="textEntrada">Entradas  </h2>
                    <FontAwesomeIcon className="icon" icon={faCircleArrowUp} />

                    <p>R$17.400,00</p>
                    
                    

                </div>
                <div  className="saidas">
                    <h2 className="textSaidas">Saídas  </h2>
                    <FontAwesomeIcon className="iconSaida" icon={faCircleArrowDown} />
                    <p>R$1.400,00</p>

                </div>

                <div className="total">
                    <h2 className="textTotal">Total  </h2>
                    <FontAwesomeIcon className="iconTotal" icon={faDollarSign} />
                    <p>R$16.456,00</p>

                </div>
            </div>
            <div>
                <form >
                    <input className="barraPesquisaTransacao" type="text" placeholder="Busque uma transação"/>
                    <button className="botaoBuscarTransacao" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/> Buscar</button>
                </form>
            </div>
            <div className="ListaTransacoes">
                <table className="tabelaTransacoes">
                    <tr className="itemTabelaTransacao">
                        <td className="causaTransacao">exemplo de transacao</td>
                        <td className="valorTransacao"> R$12.000,00</td>
                        <td className="tipoTransacao">transacao de exemplo</td>
                        <td className="dataTransacao">data de exemplo</td>
                    </tr>
                    <tr>
                        <td className="causaTransacao">exemplo de transacao</td>
                        <td className="valorTransacao"> R$12.000,00</td>
                        <td className="tipoTransacao">transacao de exemplo</td>
                        <td className="dataTransacao">data de exemplo</td>
                    </tr>
                    <tr>
                        <td className="causaTransacao">exemplo de transacao</td>
                        <td className="valorTransacao"> R$12.000,00</td>
                        <td className="tipoTransacao">transacao de exemplo</td>
                        <td className="dataTransacao">data de exemplo</td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default DTMoney

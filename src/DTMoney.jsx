import  { useState } from "react";
import "./DTMoney.css";
import Modal from "./componets/Modal";
import "./componets/modal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";







function DTMoney(){
    //abre e fecha modal ------------------
    const [openModal, setOpenModal] = useState (false)
    //----------------------

    const transactionsStorage = localStorage.getItem('transacoes');

    const [transactions, setTransactions] = useState([transactionsStorage ? JSON.parse(transactionsStorage) : []]);

    //adicionar nova transacao a lista
    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };
    


    return(
        
       
        <div className="divPai">
            <div className="header">
                <h1 className="DTMoney">DT Money</h1>
                <button onClick={() => setOpenModal(true)} className="BotaoNovaTransacao" >Nova transação</button>
                
            </div>
            <div>
                <Modal 
                    isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
                    onAddTransaction={addTransaction}
                />
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
                <form className="form">
                    <input className="barraPesquisaTransacao" type="text" placeholder="Busque uma transação"/>
                    <button className="botaoBuscarTransacao" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/> Buscar</button>
                </form>
            </div>
            <div className="ListaTransacoes">
                <div>
                    <table className="tabelaTransacoes">
                        {transactions.map((transaction, index) =>(
                            <tr className="itemTabelaTransacao"
                            key={index}>
                                <td className="causaTransacao">
                                    {transaction.description}
                                </td>
                                
                                <td className="valorTransacao"
                                style={{
                                    color: transaction.type === "expense" ? "#f75a68" : "#00b37e"
                                }}> {transaction.preco}
                                </td>
                                
                                <td className="categoriaTransacao">
                                    {transaction.category}
                                </td>
                                <td className="data"></td>
                            </tr> 
                        ))}
                        
                    </table>
                    
                    
                
                </div>
                
                

            </div>
        </div>
    )
}

export default DTMoney

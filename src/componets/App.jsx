import  { useState, useEffect } from "react";
import "/src/styles/DTMoney.css";
import Modal from "./modal";
import "/src/styles/modal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Resume from "./resume";
import Header from "./header"







const App = () => {
    // //abre e fecha modal ------------------
    // const [openModal, setOpenModal] = useState (false)
    // //----------------------
    
    //   //useEffect(() => {
    //    //   localStorage.setItem("transactions", JSON.stringify(transactions));
    //   //}, [transactions]);
    
    // const data = localStorage.getItem("transactions");
    // const [transactions, setTransactions] = useState( data ? JSON.parse(data): []
    // );

    // // const [entrada, setEntrada] = useState(0);
    // // const [saida, setSaida] = useState(0);
    // // const [total, setTotal] = useState(0); 
    

    // useEffect(() => {
    //     const entradasTotal = transactions
    //         .filter((item) => item.expense)
    //         .map((transaction) => Number(transaction.amount));

    //     const saidasTotal = transactions
    //         .filter((item) => !item.expense) 
    //         .map((transaction) => Number(transaction.amount)); 
            
        
    //     const saida = saidasTotal.reduce((acc, cur) => acc + cur, 0).toFixed(2);    
    //     const entrada = entradasTotal.reduce((acc, cur) => acc + cur, 0).toFixed(2); 
        
    //     const total = Math.abs(entrada - saida).toFixed(2);

    //     setEntrada(`R$ ${entrada}`);
    //     setSaida(`R$ ${saida}`);
    //     setTotal(`${Number(entrada) < Number(saida) ? "-" : ""} R$ ${total}`);


    //     }, [transactions]);



    // //adicionar nova transacao a lista
    // const addTransaction = (transaction) => {
    //     setTransactions([...transactions, transaction]);
    // };
    


    return(
        <>
            <Header />
            <Resume />
        </>
        
       
        // <div className="divPai">
        //     
        //     <div>
        //         <Modal
                     
        //             isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
        //             onAddTransaction={addTransaction}
        //         />
        //     </div>
        //     <div className="movimentacoes">
        //         <div className="entradas" >
                    
        //             <h2 className="textEntrada">Entradas  </h2>
        //             <FontAwesomeIcon className="icon" icon={faCircleArrowUp} />
        //             <p>{entrada}</p>
                    
                    

        //         </div>
        //         <div  className="saidas">
        //             <h2 className="textSaidas">Saídas  </h2>
        //             <FontAwesomeIcon className="iconSaida" icon={faCircleArrowDown} />
        //             <p>{saida}</p>

        //         </div>

        //         <div className="total">
        //             <h2 className="textTotal">Total  </h2>
        //             <FontAwesomeIcon className="iconTotal" icon={faDollarSign} />
        //             <p>{total}</p>

        //         </div>
        //     </div>
        //     <div>
        //         <form className="form">
        //             <input className="barraPesquisaTransacao" type="text" placeholder="Busque uma transação"/>
        //             <button className="botaoBuscarTransacao" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/> Buscar</button>
        //         </form>
        //     </div>
        //     <div className="ListaTransacoes">
        //         {
        //              transactions.length <1
        //              ?
        //              <p></p>
        //              :
        //              <table className="tabelaTransacoes">
        //              {transactions.map((transaction, index) =>(
        //                  <tr className="itemTabelaTransacao"
        //                  key={index}>
        //                      <td className="causaTransacao">
        //                          {transaction.description}
        //                      </td>
                             
        //                      <td className="valorTransacao"
        //                      style={{
        //                          color: transaction.type === "expense" ? "#f75a68" : "#00b37e"
        //                      }}>
        //                          R${transaction.preco}
        //                      </td>
                             
        //                      <td className="categoriaTransacao">
        //                          {transaction.category}
        //                      </td>
        //                      <td className="data"></td>
        //                  </tr> 
        //                 ))}
                     
        //              </table>

        //             }
                   
                
                
                

        //     </div>
        // </div>
    )
}

export default App ;

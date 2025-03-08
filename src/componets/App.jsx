import  { useState, useEffect } from "react";

import "/src/styles/modal.css"
import "/src/styles/DTMoney.css"
import Header from "./header";
import GlobalStyle from "../styles/global";
import Resume from "./resume";
import Modal from "./modal";
import Grid from "./grid";





const App = () => {
    // //abre e fecha modal ------------------
    const [openModal, setOpenModal] = useState (false);
     
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    // quando musar "transactionslist" refaz os calculos 
    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

    }, [transactionsList]);

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];
        setTransactionsList(newArrayTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));

    };
    


    return(
        <>
            <Header  setOpenModal={setOpenModal}/>
            <Resume income={income} expense={expense} total={total} />
            <Modal 
                isOpen={openModal} 
                setModalOpen={() => setOpenModal(!openModal)}
                handleAdd={handleAdd}
                transactionsList={transactionsList} 
                setTransactionsList={setTransactionsList}

            />
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
            <GlobalStyle />
            
        </>
        
 
    )
}

export default App ;

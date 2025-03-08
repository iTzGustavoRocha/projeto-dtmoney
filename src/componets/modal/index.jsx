import React from "react";
import * as C from "./styles";
import Form from "../modal/form";

const Modal = ({isOpen, setModalOpen, handleAdd, transactionsList, setTransactionsList}) => {
    if(isOpen) {

        return(
            <C.background>
                <C.Container >
                    <C.Header>
                        <C.Title>Nova transação</C.Title>
                        <C.Close onClick={setModalOpen}> X</C.Close>
                    </C.Header>
                    <Form  handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
                </C.Container>
            </C.background>
        );
    }
    return null;
    
    

};

export default Modal;


// export default function Modal({isOpen, setModalOpen, onAddTransaction}) {

  
//     // const [description, setDescription] = useState("");
//     // const [preco, setPreco] = useState("");
//     // const [category, setCategory] = useState("");
//     // const [type, setType] = useState("income");

//     // //para lidar com envio do formulario
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     //objeto com os dados do formulario
//     //     const newTransaction = {
//     //         description,
//     //         preco,
//     //         category,
//     //         type,
//     //     };

//     //     onAddTransaction(newTransaction);

//     //     setDescription("");
//     //     setPreco("");
//     //     setCategory("");
//     //     setType("income");
//     // }
  

//     if(isOpen){
//         return (
//             <div> abriu o modal </div>
                
//         )  
//     }
//     return null
// }







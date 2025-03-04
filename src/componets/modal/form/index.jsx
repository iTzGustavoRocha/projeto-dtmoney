import { useState  } from 'react';
import * as C from "./styles"

const Form = ({handleAdd}) => {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if(!desc || !amount) {
            alert("informe a descrição e o valor!");
            return;
        } else if (amount < 1){
            alert("o valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);
        
        setDesc("");
        setAmount("");

    };
    return(
    <>
        <C.Container>
            <C.inputContent >
                <C.Label>Descrição</C.Label>
                <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </C.inputContent>
            <C.inputContent>
                <C.Label>Valor</C.Label>
                <C.Input
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </C.inputContent>
            <C.radioGroup>
                <C.Input
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor='="rIncome'>Entrada</C.Label>
                <C.Input
                    type="radio"
                    id="rExpenses"
                    name='group1'
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor='rExpenses'>Saída</C.Label>
            </C.radioGroup>
            <C.Button onClick={handleSave}>ADICIONAR</C.Button>
        </C.Container>
    </>
    )
}

export default Form;
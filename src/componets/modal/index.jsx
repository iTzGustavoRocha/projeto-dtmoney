import { useState } from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";



export default function Modal({isOpen, setModalOpen, onAddTransaction}) {

  
    const [description, setDescription] = useState("");
    const [preco, setPreco] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("income");

    //para lidar com envio do formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        //objeto com os dados do formulario
        const newTransaction = {
            description,
            preco,
            category,
            type,
        };

        onAddTransaction(newTransaction);

        setDescription("");
        setPreco("");
        setCategory("");
        setType("income");
    }
  

    if(isOpen){
        return (
            <div className='backgroundModal'>
                <div className='modalStyle'>
                    <div className='divTituloFechaModal'>
                        <button className='fecharModal' onClick={setModalOpen}> < FontAwesomeIcon icon={faX}/> </button>
                        <h2 className='tituloModal'>Nova transação</h2>
                    </div>
                    <div className='divFormModal'>
                        <form className='formModal'
                            onSubmit={ handleSubmit } >
                            <div>
                                    <input className='inputModal'
                                    id='input-entrada' 
                                    placeholder='Descrição' 
                                    type="text"
                                    value={description}
                                    onChange={(e) =>{setDescription(e.target.value)}}
                                    required
                                    />
                            
                                    <input className='inputModal' 
                                    placeholder='Preço' 
                                    type="number"
                                    value={preco}
                                    onChange={(e) => setPreco(e.target.value)}
                                    required />

                                    <input className='inputModal' 
                                    placeholder='Categoria' 
                                    type="text"
                                    value={category} 
                                    onChange={(e) => setCategory(e.target.value)}
                                    required/>

                    
                           </div>
                            <div className='botoesTipoTransacao'>
                                <button className='botaoEntradaModal'
                                    type="button"
                                    onClick={() => setType("income")}>
                                    <FontAwesomeIcon className="iconModal" icon={faCircleArrowUp} />Entranda  
                                </button>
                                <button className='botaoSaidaModal'
                                    type="button"
                                    onClick={() => setType("expense")}>
                                    <FontAwesomeIcon className="iconSaidaModal" icon={faCircleArrowDown} />Saída
                                </button>
                                <div className='divButtonCadastrar'>
                                    <button className='botaoCadastrarModal' 
                                    type='submit'>
                                        Cadastrar
                                    </button>
                                </div>
                        

                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )  
    }
    return null
}







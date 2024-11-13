import 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";



export default function Modal({isOpen, setModalOpen}) {

    if(isOpen){
        return (
            <div className='backgroundModal'>
                <div className='modalStyle'>
                    <button className='fecharModal' onClick={setModalOpen}> < FontAwesomeIcon icon={faX}/> </button>

                    <h2 className='tituloModal'>Nova transação</h2>

                    <div>
                        <form className='formModal'>
                            <input className='inputModal' placeholder='Descrição' type="text" />
                            <input className='inputModal' placeholder='Preço' type="text" />
                            <input className='inputModal' placeholder='Categoria' type="text" />
                        </form>
                    </div>
                    <div className='botoesTipoTransacao'>
                        <button className='botaoEntradaModal'><FontAwesomeIcon className="iconModal" icon={faCircleArrowUp} />Entranda  </button>
                        <button className='botaoSaidaModal'><FontAwesomeIcon className="iconSaidaModal" icon={faCircleArrowDown} />Saída</button>
                        <div className='divButtonCadastrar'>
                            <button className='botaoCadastrarModal' >Cadastrar</button>
                        </div>
                    

                    </div>
                    
                </div>
            </div>
        )  
    }
    return null
}







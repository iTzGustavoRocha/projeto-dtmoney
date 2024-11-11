import 'react'




const BACKGROUND_STYLE = {
    position: 'fixed',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000',
}

const MODAL_STYLE ={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius: '7px'

}

export default function Modal({isOpen}) {

    if(isOpen){
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <h2>Nova transação</h2>
                    <button>X</button>
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div>
                        <button>Entranda</button>
                        <button>Saída</button>
                    </div>
                    <div>
                        <button>Cadastrar</button>
                    </div>
                </div>
            </div>
        )  
    }
    return null
}







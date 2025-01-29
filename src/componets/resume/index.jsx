
import react from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";


const entrada = 0
const saida = 0
const total = 0

const Resume = () => {
    return(
        
            

    <div className="movimentacoes">
                     <div className="entradas" >
                    
                         <h2 className="textEntrada">Entradas  </h2>
                         <FontAwesomeIcon className="icon" icon={faCircleArrowUp} />
                         <p>{entrada}</p>
                    
                    

                     </div>
                     <div  className="saidas">
                         <h2 className="textSaidas">Saídas  </h2>
                        <FontAwesomeIcon className="iconSaida" icon={faCircleArrowDown} />
                    <p>{saida}</p>

                     </div>

                     <div className="total">
                         <h2 className="textTotal">Total  </h2>
                         <FontAwesomeIcon className="iconTotal" icon={faDollarSign} />
                         <p>{total}</p>

                     </div>
                 </div>
    );
}
export default Resume;
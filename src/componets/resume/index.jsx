
import react from "react"
<<<<<<< HEAD
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
=======
import * as C from "./styles";
import ResumeItem from "../ResumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
    return(
        <C.Container>
            <ResumeItem title="entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumeItem title="saidas"  Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumeItem title="total" Icon={FaDollarSign} value={total} />
            
        </C.Container>     

>>>>>>> 7bd0be5 (refeito styled-components)
    );
}
export default Resume;
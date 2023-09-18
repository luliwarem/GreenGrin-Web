import "./Gracias.css"
import { Link } from "react-router-dom";

export default function Gracias() {
    return (
        <div className="gracias">
            <div className = "texto">
                <h2>Gracias por utilizar Green Grin! Tu aporte es muy importante para cuidar el planeta!  </h2>
            </div>
            <div className="buttonDiv" >
                <Link to = "/">
                    <button className="button">Volver al inicio</button>
                </Link>
            </div>
        </div>
        
    )
}
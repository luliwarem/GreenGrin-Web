import "./Warning.css"
import { Link } from "react-router-dom";

export default function Warning() {
    return (
        <div className="warning">
            <h2>Recuerde que tiene 2 minutos para escanear el codigo! </h2>
            <h2>Le recomendamos que abra la aplicacion en su movil antes de continuar</h2>
            <div className="buttonDiv" >
                <Link to="/qr">
                    <button className="button">Siguiente</button>
                </Link>
            </div>
        </div>
        
    )
}
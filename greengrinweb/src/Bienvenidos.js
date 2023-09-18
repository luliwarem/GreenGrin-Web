import "./Bienvenidos.css"
import { Link } from "react-router-dom";

export default function Bienvenidos() {
    return (
        <div className="bienvenidos">
            <h2>Bienvenidos a Green Grin </h2>
            <h2>Estacion N°12</h2>
            <p>Lea las instrucciones a su izquierda antes de comenzar</p>
            <div className="buttonDiv" >
                <Link to="/botellas">
                    <button className="button">Iniciar</button>
                </Link>
            </div>

        </div>

    )
}
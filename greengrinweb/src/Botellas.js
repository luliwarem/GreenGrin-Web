import botella from "./botella.svg"
import "./Botellas.css"

export default function Botellas() {
    return (
        <div class="botellas">
            <p>Ingrese tus botellas</p>
            <img src={botella}/>
            <p>Usted ingresó 2 botellas</p>
            <div className="buttonDiv" >
                <button className="button">Finalizar</button>
            </div>
        </div>
        
    )
}
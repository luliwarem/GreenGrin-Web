import botella from "./botella.svg"
import "./Botellas.css"

export default function Botellas() {
    return (
        <div class="botellas">
            <h2>Ingrese sus botellas</h2>
            <img src={botella}/>
            <p>Usted ingresó 2 botellas</p>
            <div className="buttonDiv" >
                <button className="button">Finalizar</button>
            </div>
        </div>
        
    )
}
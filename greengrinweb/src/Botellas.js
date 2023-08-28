import { useEffect, useState } from "react"
import botella from "./botella.svg"
import "./Botellas.css"
import axios from 'axios'

export default function Botellas() {
    const [botellas, setBotellas] = useState();
    const [json, setJson] = useState([]);
    const [idEstacion, setIdEstacion] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:3000/botellas`);  // acá hacemos la consulta de axios a la API
            setJson(response.data);
            //console.log(json)
            if (response.data.botellas)  {
                setBotellas(response.data.botellas)
            }
            //updateBotellas(json);
            setIdEstacion(response.data.idEstacion);
        }

        setInterval(() => {
            fetchData() // ejecutamos la función de búsqueda de datos
        }, 5000)
    }, [])

    /*const updateBotellas = (json) => {
        
    }*/
    return (
        <div className="botellas">
            <h2>Ingrese sus botellas</h2>
            <p> Estación N°{idEstacion}</p>
            <img src={botella} />
            <p>Usted ingresó {botellas} botella/s</p>
            <div className="buttonDiv" >
                <button className="button">Finalizar</button>
            </div>
        </div>
    )
}
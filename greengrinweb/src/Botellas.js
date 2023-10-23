import { useEffect, useState } from "react"
import botella from "./botella.svg"
import "./Botellas.css"
import axios from 'axios'
import { Link } from "react-router-dom";

export default function Botellas() {
    const [botellas, setBotellas] = useState();
    const [json, setJson] = useState([]);
    const [idEstacion, setIdEstacion] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://greengrin-backend-dev-ebes.1.us-1.fl0.io/botellas`);  // acá hacemos la consulta de axios a la API            
            setJson(response.data);
            setBotellas(response.data.botellas)
            setIdEstacion(response.data.idEstacion);
        }
        fetchData()
        setInterval(() => {
            fetchData() // ejecutamos la función de búsqueda de datos
        }, 2500)
    }, [])

    return (
        <div className="botellas">
            <h2>Ingrese sus botellas</h2>
            <p> Estación N° {idEstacion}</p>
            <img src={botella} />
            <p>Usted ingresó {botellas} botellas</p>
            <div className="buttonDiv" >
                <Link to="/warning">
                    <button className="button">Finalizar</button>
                </Link>
            </div>
        </div>
    )
}
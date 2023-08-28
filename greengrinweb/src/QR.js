import { useEffect, useState } from "react"
import "./QR.css";
import QRCode from "react-qr-code";
import axios from 'axios'

export default function QR() {
  const [botellas, setBotellas] = useState();
  const [json, setJson] = useState([]);
  const [idEstacion, setIdEstacion] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://10.152.2.134:3000/botellas`);  // acá hacemos la consulta de axios a la API
      setJson(response.data);
      if (response.data.botellas) {
        setBotellas(response.data.botellas)
      }
      setIdEstacion(response.data.idEstacion);
    }

    setInterval(() => {
      fetchData() 
    }, 2500)
  }, [])
  return (
    <div className="Qr">
      <div>
        <p>Escanee el código para acreditar sus puntos!</p>
      </div>
      <div
        style={{
          height: "1000",
          margin: "0 auto",
          maxWidth: 300,
          width: "100%",
        }}
      >
        <QRCode
          size={1000}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value= {`{'botellas':${botellas}, 'idEstacion':${idEstacion}" }`}
          viewBox={`0 0 256 256`}
          fgColor="#479A50"
        />
      </div>

      <div>
        <p>Tiempo restante: 1:25 segundos </p>
      </div>

      <div className="buttonDiv" >
        <button className="button">Finalizar</button>
      </div>
    </div>
  );
}

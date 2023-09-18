import { useEffect, useState } from "react"
import "./QR.css";
import QRCode from "react-qr-code";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function QR() {
  const [botellas, setBotellas] = useState();
  const [json, setJson] = useState([]);
  const [idEstacion, setIdEstacion] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://10.152.2.134:3000/botellas`);  // acá hacemos la consulta de axios a la API
      setJson(response.data);
      setBotellas(response.data.botellas)
      setIdEstacion(response.data.idEstacion);
    }

    fetchData() 
  }, [])

  const [timeRemaining, setTimeRemaining] = useState(180);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    let timer;

    if (timerActive && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000); 
    } else if (timeRemaining === 0) {
      alert('Se acabó el tiempo!');
      setTimerActive(false);
      //aca habría que pasar a la primera pantalla
    }

    return () => clearTimeout(timer);
  }, [timerActive, timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

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
          value= {`{\"botellas\":${botellas}, \"idEstacion\":${idEstacion}}`}
          viewBox={`0 0 256 256`}
          fgColor="#479A50"
        />
      </div>

      <div>
        <p>Tiempo restante {formatTime(timeRemaining)}</p>
      </div>

      <div className="buttonDiv" >
        <Link to = "/gracias">
          <button className="button">Finalizar</button>
        </Link>
      </div>
    </div>
  );
}

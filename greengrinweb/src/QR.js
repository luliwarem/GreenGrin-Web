import "./QR.css";
import QRCode from "react-qr-code";

export default function QR() {
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
          value="{'botellas':3, 'idEstacion':2}"
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

import "./QR.css";
import QRCode from "react-qr-code";

export default function QR() {
  return (
    <div className="Qr">
      <div
        style={{
          height: "1000",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={1000}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value="2, 3"
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

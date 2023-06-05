import './QR.css';
import QRCode from "react-qr-code"

export default function QR() {

    return(
        <div className='Qr'>
            <div className='Qr-header'>
            <QRCode className='Qr-colors'
             value="https://www.youtube.com/watch?v=UUeJjFB3fw8"
             bgColor= "white"
             fgcolor="white"
             size={250}
            />
            </div>
        </div>

    );
}

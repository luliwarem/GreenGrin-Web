import './QR.css';
import {QRCode} from "react-native-custom-qr-codes"

export default function QR() {

    return(
        <div className='Qr'>
            <div className='Qr-header'>
            <QRCode 
            codeStyle='circle' 
            innerEyeStyle='circle'
            outerEyeStyle='circle'
            linearGradient={['rgb(255,0,0)','rgb(0,255,255)']}
            content="https://www.youtube.com/watch?v=UUeJjFB3fw8"
            />
            </div>
        </div>

    );
}

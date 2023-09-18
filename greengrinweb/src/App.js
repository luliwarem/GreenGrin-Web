import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bienvenidos from "./Bienvenidos.js";
import Botellas from "./Botellas";
import Warning from "./Warning";
import Gracias from "./Gracias"
import QR from "./QR";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Bienvenidos />}></Route>
          <Route path="/botellas" element={<Botellas />}></Route>
          <Route path="/warning" element={<Warning />}></Route>
          <Route path="/qr" element={<QR />}></Route>
          <Route path="/gracias" element={<Gracias />}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
    </BrowserRouter >
  );
}

export default App;

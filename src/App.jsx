import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import Caballeros from "./pages/Caballeros";
import Camisas from "./pages/Camisas";
import Pantalones from "./pages/pantalones";
import Damas from "./pages/Damas";
import Contacto from "./pages/Contacto";
import PantalonesDama from "./pages/PantalonesDama";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/caballeros" element={<Caballeros />} />
        <Route path="/camisas" element={<Camisas />} />
        <Route path="/pantalones" element={<Pantalones />} />
        <Route path="/damas" element={<Damas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pantalonesdama" element={<PantalonesDama />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
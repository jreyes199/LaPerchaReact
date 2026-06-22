import { BrowserRouter, Routes, Route } from "react-router-dom";

import Principal from "./pages/Principal";
import Caballeros from "./pages/Caballeros";
import Camisas from "./pages/Camisas";
import Pantalones from "./pages/pantalones";
import Shorts from "./pages/Shorts";
import Damas from "./pages/Damas";
import Contacto from "./pages/Contacto";
import PantalonesDama from "./pages/PantalonesDama";
import Blusas from "./pages/Blusas";
import Vestidos from "./pages/Vestidos";
import Login from "./pages/Login";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/caballeros" element={<Caballeros />} />
        <Route path="/camisas" element={<Camisas />} />
        <Route path="/pantalones" element={<Pantalones />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/damas" element={<Damas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pantalonesdama" element={<PantalonesDama />} />
        <Route path="/blusas" element={<Blusas />} />
        <Route path="/vestidos" element={<Vestidos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
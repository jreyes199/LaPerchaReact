import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import Caballeros from "./pages/Caballeros";
import Camisas from "./pages/Camisas";
import Pantalones from "./pages/pantalones";
import Damas from "./pages/Damas";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/caballeros" element={<Caballeros />} />
        <Route path="/camisas" element={<Camisas />} />
        <Route path="/pantalones" element={<Pantalones />} />
        <Route path="/damas" element={<Damas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
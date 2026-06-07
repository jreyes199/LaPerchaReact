import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import Caballeros from "./pages/Caballeros";
import Camisas from "./pages/Camisas";
import Pantalones from "./pages/pantalones";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/caballeros" element={<Caballeros />} />
        <Route path="/camisas" element={<Camisas />} />
        <Route path="/pantalones" element={<Pantalones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
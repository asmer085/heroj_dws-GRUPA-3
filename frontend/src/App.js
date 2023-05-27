import { Route, Routes } from "react-router-dom";
import Glavna from "./Komponente/Glavna"
import Logovani from "./Komponente/Logovani"
import Login from "./Komponente/Login"
import Register from "./Komponente/Register"
import About from "./Komponente/About"
import Fajlovi from "./Komponente/Fajlovi"
import Video from "./Komponente/Video";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Glavna />} />
        <Route path="/logovani" element={<Logovani />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/about" element={<About />} />
        <Route path="/fajlovi" element={<Fajlovi />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>

  );
}

export default App;
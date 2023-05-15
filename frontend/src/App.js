import { Route, Routes } from "react-router-dom";
import Glavna from "./Komponente/Glavna"
import Logovani from "./Komponente/Logovani"
import About from "./Komponente/About"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Glavna />} />
        <Route path="/logovani" element={<Logovani />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
}

export default App;
import { Route, Routes } from "react-router-dom";
import Glavna from "./Komponente/Glavna"
import Logovani from "./Komponente/Logovani"
import Login from "./Komponente/Login"
import Register from "./Komponente/Register"
import Video from "./Komponente/Video";
import FileUploadForm from "./Komponente/UploadFajlove";
import ViewFajlove from "./Komponente/ViewFajlove";
import Kviz from "./Komponente/Kviz";
import SimulacijaIspita from "./Komponente/SimulacijaIspita";
import Ispit from "./Komponente/Ispit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Glavna />} />
        <Route path="/logovani" element={<Logovani />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/video" element={<Video />} />
        <Route path="/uploadform" element={<FileUploadForm />} />
        <Route path="/viewfajlove" element={<ViewFajlove />} />
        <Route path="/kviz" element={<Kviz />} />
        <Route path="/simulacija-ispita" element={<SimulacijaIspita />} />
        <Route path="/ispit" element={<Ispit />} />      
      </Routes>
    </div>

  );
}

export default App;
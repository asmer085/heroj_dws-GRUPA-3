import { Route, Routes } from "react-router-dom";
import Glavna from "./Komponente/Glavna"
import Logovani from "./Komponente/Logovani"
import Login from "./Komponente/Login"
import Register from "./Komponente/Register"
import About from "./Komponente/About"
import Video from "./Komponente/Video";
import FileUploadForm from "./Komponente/UploadFajlove";
import SearchFile from "./Komponente/SearchFile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Glavna />} />
        <Route path="/logovani" element={<Logovani />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video />} />
        <Route path="/uploadform" element={<FileUploadForm />} />
        <Route path="/search" element={<SearchFile/>}/>
      </Routes>
    </div>

  );
}

export default App;
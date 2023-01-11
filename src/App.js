
import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import ProjectPage from "./ProjectPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <div className="" >
        <Navbar />
 
      </div>

      <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/work" element={<ProjectPage/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Component/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Hero/>
      </div>

      <Routes>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

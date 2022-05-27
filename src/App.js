import Data from "./components/data/Data";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Cloud from "./components/cloud/Cloud"; 
import Footer from "./components/footer/Footer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    < >
    <Navbar />
    <Hero />
    <Data />
    <Cloud />
    <Footer />
    </ >
  );
}

export default App;

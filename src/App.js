import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import './App.css';
import Error from "./pages/Error";
import Navbar from "./components/navbar";

function App() {
  return (
    
    <BrowserRouter>
       <Navbar/>
        <Routes> 
            <Route path="/" element={<Home/>} /> 
            <Route path="/blog" element={<Blog/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    </BrowserRouter>

)
};

export default App;

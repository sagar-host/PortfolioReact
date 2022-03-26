import { React} from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/home"
import Proute from "./Components/ProjectRoute/proute"




function App() {



  return (
    <div className="App">
    

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myproject" element={<Proute />} />
      </Routes>
   
     
 
    </div>
 
      


    
   
  );
}

export default App;

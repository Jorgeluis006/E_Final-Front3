
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from "./Components/Form";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import ToggleButton from './Routes/ToggleButton';
import Detail from "./Routes/Detail";


function App() {


  return (
    <div className="App">

    <Router>
    <Navbar/>
    
    <Routes>
          
    
        <Route exact path="/" element={Home} />
        
        <Route path="/favs" element={Favs} />
        <Route path="/form" element={<Form />} />
        <Route path="/card" element={<Card/>}/>
        <Route path="/Outlet" element={<Outlet/>}/>
        <Route path="/dentist" element={Detail} />
        <Route path="/ToggleButton" element={<ToggleButton/>}/>
          
        
        </Routes>
       
        <Footer/>
        
      </Router>
     </div>
  );
}

export default App;

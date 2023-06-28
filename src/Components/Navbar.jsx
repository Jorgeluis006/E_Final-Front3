import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

function Navbar ()  {

return(
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DH-Odontology</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={"/"}>Home♛</Link>
        </li>

       

        <li className="nav-item">
          <Link className="nav-link " to={"/form"}>Login✉</Link>
        </li>
        
     
       
      
        <li className="nav-item">
          <Link className="nav-link " to={"/card"}>Card</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to={"/ToggleButton"}>Modos</Link>
        </li>
       
      
        
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
          </div>
          </div>
</nav>
  
  

  </>

)

}



export default Navbar;
import React from "react";
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
 

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push({ name, username, id });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

  return (

    <>
    <div className={`card`}>
<Link  className="card" to={'https://jsonplaceholder.typicode.com/users/'} >
<img className="card-odonto" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Leanne Graham-Bret</h2>
    <p>ID: {1}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>

  <Link to={'https://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Ervin Howell-Antonette</h2>
    <p>ID: {2}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>

  <Link to={'https://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Clementine Bauch-Samantha</h2>
    <p>ID: {3}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>

  <Link to={'https://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Patricia Lebsack-Karianne</h2>
    <p>ID: {4}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>

  <Link to={'https://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Chelsey Dietrich-Kamren</h2>
    <p>ID: {5}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>


  <Link to={'hhttps://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Dennis Schulist-Leopoldo_Corkery</h2>
    <p>ID: {6}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>

  <Link to={'https://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Kurtis Weissnat-Elwyn.Skiles</h2>
    <p>ID: {7}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>
    

  <Link to={'https://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Nicholas Runolfsdottir-Maxime_Nienow</h2>
    <p>ID: {8}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>

  <Link to={'https://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Glenna Reichert-Delphine</h2>
    <p>ID: {9}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>

  <Link to={'https://jsonplaceholder.typicode.com/users/'} className="card">
<img className="card-img-top" src="/img/doctor.jpg" alt="doctor placeholder"/>
          
    
    <h2>Clementina DuBuque-Moriah.Stanton</h2>
    <p>ID: {10}</p>
    
    <button onClick={addFav} className="favButton">⭐</button>
  </Link>
      </div>
       


      


    
    </>
  );
};

export default Card;
      
  
  









import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.log(error));
  }, []);

  const handleAddFavorite = (dentist) => {
    // Aquí agregarías el dentista a los favoritos en el localStorage
    // ...

    // Ejemplo:
    const favoriteDentists = JSON.parse(localStorage.getItem('favoriteDentists')) || [];
    favoriteDentists.push(dentist);
    localStorage.setItem('favoriteDentists', JSON.stringify(favoriteDentists));
  };

  return (
    <div>
      <h2>Listado de dentistas</h2>
      <div className="grid-container">
        {dentists.map(dentist => (
          <div key={dentist.id} className="card">
            <h3>{dentist.name}</h3>
            <p>Username: {dentist.username}</p>
            <button onClick={() => handleAddFavorite(dentist)}>ADD FAV</button>
            <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
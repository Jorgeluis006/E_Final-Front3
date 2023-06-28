import React, { useEffect, useState } from 'react';


const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [selectedDentist, setSelectedDentist] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => alert(error));
  }, []);

  const handleAddFavorite = (dentist) => {
    const favoriteDentists = JSON.parse(localStorage.getItem('favoriteDentists')) || [];
    favoriteDentists.push(dentist);
    localStorage.setItem('favoriteDentists', JSON.stringify(favoriteDentists));
  };

  const handleShowDetails = (dentist) => {
    setSelectedDentist(dentist);
  };

  return (
    <div>
      <h2>Listado de dentistas</h2>
      <div className="grid-container">
        {dentists.map(dentist => (
          <div key={dentist.id} className="card">
            <img src="/img/doctor.jpg" alt={dentist} />
            <h3>{dentist.name}</h3>
            <p>Username: {dentist.username}</p>
            <button onClick={() => handleAddFavorite(dentist)}>⭐</button>
            <button onClick={() => handleShowDetails(dentist)}>Ver detalles</button>
          </div>
        ))}
      </div>

      {selectedDentist && (
        <div>
          <h2>Dentist Details</h2>
          <div className="card-details">
            <h3>{selectedDentist.name}</h3>
            <p>Email: {selectedDentist.email}</p>
            <p>Phone: {selectedDentist.phone}</p>
            <p>Website: {selectedDentist.website}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
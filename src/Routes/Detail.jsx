import React, { useEffect, useState } from 'react';



const Detail = ({ match }) => {



  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const dentistId = match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${dentistId}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => alert(error));
  }, [match.params.id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dentist Details</h2>
      <div className="card">
        <h3>{dentist.name}</h3>
        <p>Email: {dentist.email}</p>
        <p>Phone: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>
      </div>
    </div>
  );
};


export default Detail;

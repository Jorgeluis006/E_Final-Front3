import React, { useEffect, useState } from 'react';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users${match.params.id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error('Failed to fetch user');
          alert("si");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [match.params.id]);

  return (
    <>
      <h1>Detail Dentist id {match.params.id}</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;

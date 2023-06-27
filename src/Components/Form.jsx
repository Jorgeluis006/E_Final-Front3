import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (name.length <= 5 || !emailIsValid(email)) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    
    console.log("Nombre:", name);
    console.log("Email:", email);

    
    setSuccess(true);
    setError("");
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formulariocss">
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formulariocss">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      {success && (
        <p>
          Gracias {name}, te contactaremos cuanto antes vía mail.
        </p>
      )}
    </div>
  );
};

export default Form;
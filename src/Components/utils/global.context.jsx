import React, { createContext, useMemo, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [data, setData] = useState(initialState.data);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const fetchData = () => {
    // Aquí puedes implementar la lógica para obtener los datos
    // Por ejemplo, hacer una solicitud HTTP a un servidor

    // Ejemplo:
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const contextValue = useMemo(() => {
    return {
      state: {
        theme,
        data,
      },
      actions: {
        changeTheme,
        fetchData,
      },
    };
  }, [theme, data]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
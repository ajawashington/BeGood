import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
dotenv.config();

export const BusinessTypeContext = React.createContext();
const dbURL = process.env.REACT_APP_DATABASE_URL;

export const BusinessTypeProvider = (props) => {
  const [businessTypes, setBusinessTypes] = useState([]);

  const getBusinessTypes = () => {
    return fetch(`${dbURL}/begood/businessTypes.json`)
      .then((res) => res.json())
      .then(setBusinessTypes);
  };

  useEffect(() => {
    getBusinessTypes();
  }, []);

  useEffect(() => {}, [businessTypes]);

  return (
    <BusinessTypeContext.Provider
      value={{
        businessTypes,
      }}
    >
      {props.children}
    </BusinessTypeContext.Provider>
  );
};

import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
dotenv.config();

export const CharityRequestContext = React.createContext();
const dbURL = process.env.REACT_APP_DATABASE_URL;

export const CharityRequestProvider = (props) => {
  const [charityRequests, setCharityRequests] = useState([]);

  const getCharityRequests = () => {
    return fetch(
      `${dbURL}/begood/charityRequests.json`
    )
      .then((res) => res.json())
      .then(setCharityRequests);
  };

  const addCharityRequest = (charityRequest) => {
    return fetch(`${dbURL}/begood/charityRequests.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(charityRequest),
    }).then(getCharityRequests);
  };

  const deleteCharityRequest = (charityRequest) => {
    return fetch(`${dbURL}/begood/charityRequests.json`, {
      method: "DELETE",
    }).then(getCharityRequests);
  };

  const updateCharityRequest = (charityRequest) => {
    return fetch(`${dbURL}/begood/charityRequests.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(charityRequest),
    }).then(getCharityRequests);
  };

  useEffect(() => {
    getCharityRequests();
  }, []);

  useEffect(() => {
  }, [charityRequests]);

  return (
    <CharityRequestContext.Provider
      value={{
        charityRequests,
        addCharityRequest,
        deleteCharityRequest,
        updateCharityRequest,
      }}
    >
      {props.children}
    </CharityRequestContext.Provider>
  );
};

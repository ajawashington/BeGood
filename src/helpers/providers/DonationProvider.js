import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
dotenv.config();

export const DonationContext = React.createContext();
const dbURL = process.env.REACT_APP_DATABASE_URL;

export const DonationProvider = (props) => {
  const [donations, setDonations] = useState([]);

  const getDonations = () => {
    return fetch(
      `${dbURL}/begood/donations.json`
    )
      .then((res) => res.json())
      .then(setDonations);
  };

  const addDonation = (donation) => {
    return fetch(`${dbURL}/begood/donations.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donation),
    }).then(getDonations);
  };
  useEffect(() => {
    getDonations();
  }, []);

  useEffect(() => {}, [donations]);

  return (
    <DonationContext.Provider
      value={{
        donations,
        addDonation,
      }}
    >
      {props.children}
    </DonationContext.Provider>
  );
};

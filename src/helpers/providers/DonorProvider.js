import React, { useState, useEffect } from "react"
import dotenv from "dotenv";
dotenv.config();

export const DonorContext = React.createContext()
const dbURL = process.env.REACT_APP_DATABASE_URL;

export const DonorProvider = (props) => {
    const [donors, setDonors] = useState([])

    const getDonors = () => {
        return fetch(`${dbURL}/begood/donors.json`)
            .then(res => res.json())
            .then(setDonors)
    }

    const addDonor = donor => {
        return fetch(`${dbURL}/begood/donors.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donor)
        })
            .then(getDonors)

    }
    useEffect(() => {
        getDonors()
    }, [])

    useEffect(() => {
    }, [donors])

    return (
        <DonorContext.Provider value={{
            donors, addDonor
        }}>
            {props.children}
        </DonorContext.Provider>
    )
}
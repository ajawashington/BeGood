import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const DonationContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DonationProvider = (props) => {
    const [donations, setDonations] = useState([])

    const getDonations = () => {
        return fetch("http://localhost:4444/donations")
            .then(res => res.json())
            .then(setDonations)
    }

    const addDonation = donation => {
        return fetch("http://localhost:4444/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donation)
        })
            .then(getDonations)

    }
    useEffect(() => {
        getDonations()
    }, [])

    useEffect(() => {
        console.log("****  DONATION APPLICATION STATE CHANGED  ****")
    }, [donations])

    return (
        <DonationContext.Provider value={{
            donations, addDonation
        }}>
            {props.children}
        </DonationContext.Provider>
    )
}
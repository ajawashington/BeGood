import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const DonorContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DonorProvider = (props) => {
    const [donors, setDonors] = useState([])

    const getDonors = () => {
        return fetch("http://localhost:4444/donors?_expand=user")
            .then(res => res.json())
            .then(setDonors)
    }

    const addDonor = donor => {
        return fetch("http://localhost:4444/donors", {
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
        console.log("****  Donor APPLICATION STATE CHANGED  ****")
    }, [donors])

    return (
        <DonorContext.Provider value={{
            donors, addDonor
        }}>
            {props.children}
        </DonorContext.Provider>
    )
}
import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BusinessContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BusinessProvider = (props) => {
    const [businesses, setBusinesses] = useState([])

    const getBusinesses = () => {
        return fetch("http://localhost:4444/businesses?_expand=businessType")
            .then(res => res.json())
            .then(setBusinesses)
    }

    const addBusiness = business => {
        return fetch("http://localhost:4444/businesses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(business)
        })
            .then(getBusinesses)
    }

    const updateBusiness = business => {
        return fetch(`http://localhost:4444/businesses/${business.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(business)
        })
            .then(getBusinesses)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBusinesses()
    }, [])

    useEffect(() => {
        console.log("****  Business APPLICATION STATE CHANGED  ****")
    }, [businesses])

    return (
        <BusinessContext.Provider value={{
            businesses, addBusiness, updateBusiness
        }}>
            {props.children}
        </BusinessContext.Provider>
    )
}
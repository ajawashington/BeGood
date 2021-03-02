import React, { useState, useEffect } from "react"

export const BusinessContext = React.createContext()

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
    useEffect(() => {
        getBusinesses()
    }, [])

    useEffect(() => {
    }, [businesses])

    return (
        <BusinessContext.Provider value={{
            businesses, addBusiness, updateBusiness
        }}>
            {props.children}
        </BusinessContext.Provider>
    )
}

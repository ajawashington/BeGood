import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CharityRequestContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CharityRequestProvider = (props) => {
    const [charityRequests, setCharityRequests] = useState([])

    const getCharityRequests = () => {
        return fetch("http://localhost:4444/charityRequests?_expand=user&_expand=business")
            .then(res => res.json())
            .then(setCharityRequests)
    }

    const addCharityRequest = charityRequest => {
        return fetch("http://localhost:4444/charityRequests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(charityRequest)
        })
            .then(getCharityRequests)
    }

    const deleteCharityRequest = charityRequest => {
        return fetch(`http://localhost:4444/charityRequests/${charityRequest.id}`, {
            method: "DELETE",
        })
            .then(getCharityRequests)
    }

    const updateCharityRequest = charityRequest => {
        return fetch(`http://localhost:4444/charityRequests/${charityRequest.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(charityRequest)
        })
            .then(getCharityRequests)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCharityRequests()
    }, [])

    useEffect(() => {
        console.log("****  CharityRequest APPLICATION STATE CHANGED  ****")
    }, [charityRequests])

    return (
        <CharityRequestContext.Provider value={{
            charityRequests, addCharityRequest, deleteCharityRequest, updateCharityRequest
        }}>
            {props.children}
        </CharityRequestContext.Provider>
    )
}
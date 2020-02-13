import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BusinessTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BusinessTypeProvider = (props) => {
    const [businessTypes, setBusinessTypes] = useState([])

    const getBusinessTypes = () => {
        return fetch("http://localhost:4444/businesses?_expand=businessType")
            .then(res => res.json())
            .then(setBusinessTypes)
    }

    useEffect(() => {
        getBusinessTypes()
    }, [])

    useEffect(() => {
        // console.log("****  BUSINESS TYPE APPLICATION STATE CHANGED  ****")
    }, [businessTypes])

    return (
        <BusinessTypeContext.Provider value={{
            businessTypes
            // , addBusinessType, updateBusinessType
        }}>
            {props.children}
        </BusinessTypeContext.Provider>
    )
}
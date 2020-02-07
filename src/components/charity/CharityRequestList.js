  
import React, { useContext } from "react"
import { CharityRequestContext } from "./CharityRequestProvider"
import CharityRequest from "./CharityRequest"
import "./CharityRequests.css"

export default (props) => {

    const { charityRequests } = useContext(CharityRequestContext)
    console.log(charityRequests, "here are the requests")
    const activeCharityRequest = charityRequests.sort(c => c.id === parseInt(localStorage.getItem("beyGood_user")))
    
    return (
        <>
        <h1>Pending Requests</h1>
        <div className="charityRequests">
            {
            activeCharityRequest.map(c => {

               return <CharityRequest key={c.id} charityRequest={c} {...props} />
                    
                    
            }
               )}
        </div>
        </>
    )
}
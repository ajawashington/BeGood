  
import React, { useContext } from "react"
import { CharityRequestContext } from "../../helpers/providers/CharityRequestProvider"
import CharityRequest from "./CharityRequest"

export default (props) => {

    const { charityRequests } = useContext(CharityRequestContext)
    const activeCharityRequest = charityRequests.sort(c => c.id === parseInt(localStorage.getItem("BeGood_user")))
    
    return (
        <>
        <h1 className="donationHeader">PENDING REQUESTS</h1>
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

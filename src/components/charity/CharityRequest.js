import React, { useContext } from "react"
import "./CharityRequests.css"
import { CharityRequestContext } from "./CharityRequestProvider";
import { DonationContext } from "../donations/DonationProvider";


export default ({ charityRequest, business,  history }) => {
    const { deleteCharityRequest } = useContext(CharityRequestContext)
    const { addDonation } = useContext(DonationContext)
  

      const completedCharityRequest = () => {
            addDonation({
                id: charityRequest.id,
                issue: charityRequest.issue,
                amount: charityRequest.amount,
                userId: charityRequest.userId,
                businessId: charityRequest.businessId, 
                donorId: parseInt(localStorage.getItem("beyGood_user"), 10),
            })
        }
        // const updatedCharityRequest = () => {
        //     addDonation({
        //         id: charityRequest.id,
        //         issue: charityRequest.issue,
        //         amount: charityRequest.amount,
        //         userId: charityRequest.userId,
        //         businessId: charityRequest.businessId, 
        //         donorId: parseInt(localStorage.getItem("beyGood_user"), 10),
        //     })
        // }
       
    const activeUserRequests = (charityRequest, history ) => {

        
    if(charityRequest.userId === parseInt(localStorage.getItem("beyGood_user"), 10)){
    return(
    
    <div> 
      <button className= "active__request" 
            onClick={() => {
                
               history.push(`/charity/edit/${charityRequest.id}`)
            }}>Edit</button>
    
        <button onClick={
            () => {
                deleteCharityRequest(charityRequest)
                .then(() => {
                    history.push("/donor")            
                })
            }}>
        Delete Request
        </button>
    
    </div>
    
    )} else { 
    
        return (
            <button className="donate" id={ `charityRequest--${charityRequest.donor}` }
    
    onClick={() => {
    
       completedCharityRequest(charityRequest)
       deleteCharityRequest(charityRequest)

    }}>DONATE</button>
        )
    }}

            return(
                
            <section className="charityRequest">
                <h3 className="charityRequest__tagName">{charityRequest.user.tagName}</h3>
                <div className="charityRequest__issue">{charityRequest.issue}</div>
                <div className="charityRequest__amount">{ charityRequest.amount }</div>
                <div className="charityRequest__business">{ charityRequest.business.name }</div>
                {activeUserRequests(charityRequest, history)}

            </section>
        
        )


}

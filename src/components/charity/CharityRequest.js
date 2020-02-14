import React, { useContext } from "react"
import "./CharityRequests.css"
import { CharityRequestContext } from "./CharityRequestProvider";
import { DonationContext } from "../donations/DonationProvider";
import { DonorContext } from "../donations/DonorProvider";


export default ({ charityRequest, history, match }) => {
    const { deleteCharityRequest } = useContext(CharityRequestContext)
    const { addDonation } = useContext(DonationContext)
  

      const completedCharityRequest = () => {
            addDonation({
                id: charityRequest.id,
                issue: charityRequest.issue,
                amount: charityRequest.amount,
                item: charityRequest.item,
                userId: charityRequest.userId,
                businessId: charityRequest.businessId, 
                donorId: parseInt(localStorage.getItem("beyGood_user"), 10),
            })}

            // here is what the function will be looking for to POST to database. this is was going to happen 
            // when "donate" button is pressed. STRETCH: dialog box to "confirm donation"
       


    const activeUserRequests = (charityRequest, history ) => {

        // here is how our Charity Request will be render when it is being called 
        // and what events it will be listening to 
        // if the request user id matches the active user than edit and delete buttons will render
        // those buttons push the object to "editMode" on list or deletes from database

    if(charityRequest.userId === parseInt(localStorage.getItem("beyGood_user"), 10)){
    return(
    
    <div> 
       <button className="active__charityRequest" onClick={() => {
               history.push(`/charity/edit/${charityRequest.id}`)
            }}>Edit</button>

        <button onClick={
            () => {
                if(match.url === "/"){
                    deleteCharityRequest(charityRequest)
                }
                // this is here so that requests can be deleted on active user Profile page
                else{
                    deleteCharityRequest(charityRequest)
                    .then(() => {
                        history.push("/donor")            
                    })
                }
               
            }}>
        Delete
        </button>
    
    </div>
    
    )} else { 
    
        return (
          <button className="donate" id={ `charityRequest--${charityRequest.donor}` }
    
    onClick={
        () => {
         
                completedCharityRequest(charityRequest)
                deleteCharityRequest(charityRequest)
            
           
        }}>DONATE</button>
        )
    }}

            return(
                // here is what will render on each card on every page 
            <section className="charityRequest">
                <h3 className="charityRequest__tagName">{charityRequest.user.tagName} needs {charityRequest.item}. </h3>
                <div>The issue is "{charityRequest.issue}"</div>
                {/* <div className="charityRequest__issue">{charityRequest.issue}</div> */}
                <div className="charityRequest__amount">This will cost { charityRequest.amount } at { charityRequest.business.name }</div>
                {/* <div className="charityRequest__business">at { charityRequest.business.name }</div> */}
                {activeUserRequests(charityRequest, history)}

            </section>
        
        )

            
}


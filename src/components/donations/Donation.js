import React, { useContext } from "react"
import { CharityRequestContext } from "../charity/CharityRequestProvider"
import { DonationContext } from "./DonationProvider";


export default ({ charityRequest, history }) => {
    
    const { addDonation } = useContext(DonationContext);
    const {deleteCharityRequest} = useContext(CharityRequestContext)

    
    const activeUserCharityRequest = (charityRequest, history) => {
        
    if(charityRequest.userId === parseInt(localStorage.getItem("nutshell_user"), 10)){
    return(
    
    <div> 
      <button onClick={() => {
               history.push(`/${charityRequest.id}`)
            }}>Edit</button>
    
        <button onClick={
            () => {
                deleteCharityRequest(charityRequest)
                .then(() => {
                    history.push("/")            
                })
            }}>
        Delete CharityRequest
        </button>
    
    </div>
    
    )} else {
        return("")
    }}


    return(
            <section className="CharityRequest">
                <div className="email__name" onClick={
            (evt) => {
              evt.preventDefault()
              addDonation({
                activeUserId: parseInt(localStorage.getItem("nutshell_user"), 10),
                userId: parseInt(charityRequest.userId)
              })
            }} >{charityRequest.user.email}: </div>  
                <div className="CharityRequest__text">{charityRequest.text}</div>  
                {activeUserCharityRequest(charityRequest, history)}
               
            </section>
    )

}

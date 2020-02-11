import React, { UseContext } from "react"
import "./Donations.css"
// import { DonationContext } from "./DonationProvider"




export default ({ donation, history }) => {

    // const {getDonations} = UseContext(DonationContext)
    
        
        if(donation.donorId === parseInt(localStorage.getItem("beyGood_user"), 10)){
            return(
        
                <button 
                // onClick={
                //     () => {
                //         activeUserDonations(donation)
                        
                //     }}
                    >
                Show Donations
                </button>
           
    )               
                } 
            }
                           

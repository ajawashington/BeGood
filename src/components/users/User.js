import React from "react"
import "./Users.css"

export default ({ donation, history }) => {
    
    const activeUserDonations = (donation, history) => {
        
    if(donation.userId === parseInt(localStorage.getItem("beyGood_user"), 10)){
    return(
            <section className="donation">
                <h3 className="donation__issue">{donation.issue}</h3>
                <div className="donation__amount">{ donation.amount}</div>
                <div className="donation__business">{ donation.business}</div>
                {activeUserDonations(donation, history)}

            </section>
    )}
    }
    }


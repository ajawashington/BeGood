import React, { useContext } from "react"
import { DonationContext } from "./DonationProvider"
import Donation from "./Donation"
import "./Donations.css"

export default (props) => {
    const { donations } = useContext(DonationContext)
    const activeUserDonations = donations.filter(d => d.donorId === parseInt(localStorage.getItem("beyGood_user")))
    console.log(activeUserDonations)

    return (
        <>
            <h1>Donations</h1>
            <div className="donations">
                {
                    
                    activeUserDonations.map(d => {

                        return <Donation key={d.id} Donation={d} {...props} />
                        
                    }) 
                }

            </div>
        </>
    )
}
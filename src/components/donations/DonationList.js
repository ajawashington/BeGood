import React, { useContext } from "react"
import { DonationContext } from "./DonationProvider"
import Donation from "./Donation"
import "./Donations.css"
import CharityRequest from "../charity/CharityRequest"
import { CharityRequestContext } from "../charity/CharityRequestProvider"

export default (props) => {
    const { donations } = useContext(DonationContext)
    const { charityRequests } = useContext(CharityRequestContext)
    const activeUserDonations = donations.filter(d => d.donorId === parseInt(localStorage.getItem("beyGood_user")))
    const activeUserRequests = charityRequests.filter(cr => cr.userId === parseInt(localStorage.getItem("beyGood_user")) )
    const activeUserCompletedRequests = donations.filter(dr => dr.userId === parseInt(localStorage.getItem("beyGood_user")) )

    return (
        <>
            <h1>YOUR DONATIONS</h1>
            <div className="donations">
                {activeUserDonations.map(d => {
                    return <Donation key={d.id} donation={d} {...props} />
                 }) }
                 
            </div>
            <h1>REQUESTS: COMPLETED</h1>
            <div className="requests">
                {activeUserCompletedRequests.map(dr => {
                    return <Donation key={dr.id} donation={dr} {...props} />
                 }) }
                 
            </div>
            <h1>REQUESTS: PENDING</h1>
            <div className="requests">
                {activeUserRequests.map(cr => {
                    return <CharityRequest key={cr.id} charityRequest={cr} {...props} />
                 }) }
                 
            </div>
            
        </>
    )
}
import React, { useContext } from "react"
import { BusinessContext } from "../businesses/BusinessProvider"
// import { CharityRequestContext } from "../charity/CharityRequestProvider"
import { DonationContext } from "./DonationProvider"
// import "./donations.css"

export default (props) => {
    const { donations } = useContext(DonationContext)
    // const { charityRequests } = useContext(CharityRequestContext)

    const { businesses } = useContext(BusinessContext)

    const chosenDonationId = parseInt(props.match.params.donationId, 10)

    const donation = donations.find(a => a.id === chosenDonationId) || {}
    const business = businesses.find(c => c.id === donation.businessId) || {}
    // const charityRequest = charityRequests.find(l => l.id === donation.charityRequestId) || {}

    return (
        <section className="donation">
            {/* <h3 className="donation__name">Tag Name: {donation.name}</h3> */}
            <div className="donation__breed">Issue: {donation.issue}</div>
            {/* <div className="donation__charityRequet">CharityRequest: {charityRequest.id}</div> */}
            <div className="donation__owner">Business: {business.name}</div>
        </section>
    )
}
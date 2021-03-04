import React, { useContext } from "react"
import { CharityRequestContext } from "../../helpers/providers/CharityRequestProvider"
import { DonationContext } from "../../helpers/providers/DonationProvider"
import { BusinessContext } from "../../helpers/providers/BusinessProvider"
import CharityRequest from "../charity/CharityRequest"
import Donation from "../donations/Donation"

export default (props) => {
    const { businesses } = useContext(BusinessContext)
    const { donations } = useContext(DonationContext)
    const { charityRequests } = useContext(CharityRequestContext)

    const chosenBusinessId = parseInt(props.match.params.businessId, 10)

    const business = businesses.find(a => a.id === chosenBusinessId) || {}
    const businessRequests = charityRequests.filter(b => b.businessId === chosenBusinessId)
    const businessDonations = donations.filter(d => d.businessId === chosenBusinessId)

    return (
        <>
        <div>

        <section className="businessHeader" >
            <div>
            <h1>{business.name}</h1>
            </div>
            <div>
                
            </div>
          <h4 >Address: { business.address }</h4>
        </section>
        </div>
            <div className="business__requests">
            {businessRequests.map(br => <CharityRequest key={br.id} charityRequest={br} />)}
            {businessDonations.map(d => <Donation key={d.id} donation={d} />)}
            </div>
    </>
    )
}
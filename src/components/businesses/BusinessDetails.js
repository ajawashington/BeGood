import React, { useContext } from "react"
import { CharityRequestContext } from "../charity/CharityRequestProvider"
import { BusinessTypeContext } from "./BusinessTypeProvider"
import { BusinessContext } from "./BusinessProvider"
import "./Businesses.css"

export default (props) => {
    const { businesses } = useContext(BusinessContext)
    const { businessTypes } = useContext(BusinessTypeContext)
    const { charityRequests } = useContext(CharityRequestContext)

    const chosenBusinessId = parseInt(props.match.params.businessId, 10)
    const showCharityRequestId = parseInt(props.match.params.charityRequestId, 10)

    const business = businesses.find(a => a.id === chosenBusinessId) || {}
    const charityRequest = charityRequests.find(c => c.id === showCharityRequestId) || {}
    const businessRequests = charityRequests.find(b => b.id === charityRequest.charityRequestId)

    return (
        <>
        <section className="business">
            <h1 className="business__name">{business.name}</h1>
          <h4 className="business__breed">Address: { business.address }</h4>
        </section>
            <div className="business__requests">

            <div>The issue is {charityRequest.issue}</div>
                <div>This will cost { charityRequest.amount } at { business.name }</div>
            </div>
    </>
    )
}
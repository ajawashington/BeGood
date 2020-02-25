import React, { useContext } from "react"
import { CharityRequestContext } from "../charity/CharityRequestProvider"
import { BusinessTypeContext } from "./BusinessTypeProvider"
import { BusinessContext } from "./BusinessProvider"
import "./Businesses.css"
import CharityRequest from "../charity/CharityRequest"

export default (props) => {
    const { businesses } = useContext(BusinessContext)
    const { businessTypes } = useContext(BusinessTypeContext)
    const { charityRequests } = useContext(CharityRequestContext)

    const chosenBusinessId = parseInt(props.match.params.businessId, 10)

    const business = businesses.find(a => a.id === chosenBusinessId) || {}
    const businessRequests = charityRequests.filter(b => b.businessId === chosenBusinessId)

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
            </div>
    </>
    )
}
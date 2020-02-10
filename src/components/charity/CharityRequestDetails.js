// import React, { useContext } from "react"
// import { DonorContext } from "../donors/DonorProvider"
// import { BusinessContext } from "../businesses/BusinessProvider"
// import { CharityRequestContext } from "./CharityRequestProvider"
// import "./CharityRequests.css"

// export default (props) => {
//     const { charityRequests } = useContext(CharityRequestContext)
//     const { businesses } = useContext(BusinessContext)
//     const { donors } = useContext(DonorContext)

//     const chosenCharityRequestId = parseInt(props.match.params.charityRequestId, 10)

//     const charityRequest = charityRequests.find(a => a.id === chosenCharityRequestId) || {}
//     const donor = donors.find(c => c.id === charityRequest.donorId) || {}
//     const business = businesses.find(l => l.id === charityRequest.businessId) || {}

//     return (
//         <section className="charityRequest">
//             <h3 className="charityRequest__name">{charityRequest.tagName}</h3>
//             <div className="charityRequest__business">business: {business.name}</div>
//             <div className="charityRequest__owner">donor: {donor.name}</div>
//         </section>
//     )
// }
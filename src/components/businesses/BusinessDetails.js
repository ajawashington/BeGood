import React, { useContext } from "react"
import { BusinessContext } from "./BusinessProvider"
import Donation from "../donations/Donation"
import "./Businesses.css"
import { DonationContext } from "../donations/DonationProvider"

export default (props) => {
    const { businesses } = useContext(BusinessContext)
    const { donations } = useContext(DonationContext)

    const chosenBusinessId = parseInt(props.match.params.businessId, 10)

    return (
        <div className="businesses">
            {
                donations.map(l => {
                    const chosenBusinessId = donations.filter(
                        (donation) => {
                            return l.id === donation.chosenBusinessId
                        }
                    )
                    return <Donation key={l.id}
                                     business={chosenBusinessId}
                                     donation={l} />
                })
            }
        </div>
    )
}
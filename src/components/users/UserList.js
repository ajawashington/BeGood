import React, { useContext } from "react"
import { UserContext } from "./UserProvider"
import User from "./User"
import "./Users.css"
import { DonationContext } from "../donations/DonationProvider"

export default () => {
    const { users } = useContext(UserContext)
    const { donations } = useContext(DonationContext)

    return (
        <div className="users">
            {
                users.map(d => {
                    const activeUserDonations = donations.filter(
                        (donation) => {
                            return d.id === donation.userId
                        }
                    )
                    return <User key={d.id}
                                     Donations={activeUserDonations}
                                     User={d} />
                })
            }
        </div>
    )
}
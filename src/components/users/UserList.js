import React, { useContext } from "react"
import { DonationContext } from "../donations/DonationProvider"
import Donation from "../donations/Donation"
import "./Users.css"
import { UserContext } from "../users/UserProvider"

export default (props) => {
    const { donations } = useContext(DonationContext)
    const { users } = useContext(UserContext)


    const donationsArray = []

    const activeUserDonations = donations.filter(a => {
        return a.userId === parseInt(localStorage.getItem("beyGood_user"), 10)
    })

    activeUserDonations.map(a => {
        return donationsArray.push(a)
    })

    const activeUsersArray = users.filter( f => {
        return f.activeUserId === parseInt(localStorage.getItem("beyGood_user"), 10)
    })

    const userDonations = activeUsersArray.map(u =>{
        return donations.filter(d => {
            return d.userId === u.userId 
        })
    })
    const singleUserDonation = userDonations.map (u => {
        return u.map(ud => donationsArray.push(ud))
    })

    console.log(donationsArray)
    return (
        <>
            <h1>Donations</h1>
            <div className="Donations">

                {
                    donationsArray.map(d => {
                        return <Donation key={d.id} Donation={d} {...props} />
                    })
                }
            </div>
        </>
    )
}
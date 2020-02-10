import React from "react"
import "./Users.css"

export default ({ user, donations }) => (
    <section className="donation">
        <h3 className="donor__name">{user.tagName}</h3>
        <div className="donation__issue">{user.donation.issue}</div>
        <div className="donation__amount">{user.donation.amount}</div>
        <div className="donation__business">{user.donation.business}</div>
        <div className="donation__user">{user.donation.user}</div>
        Donations: 
        <ul>
            {
                donations.map(d => <li key={d.id}>{d.donation}</li>)
            }
        </ul>
    </section>
)
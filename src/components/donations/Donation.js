import React from "react"
// import "./Animals.css"
import { Link } from "react-router-dom"

export default ({ donation }) => (
    <section className="donation">
        <h3 className="donation__name">

                DONOR: { donation.donor.tagName}
        </h3>
<section className="donation__user">Thank you for your generous donation you made to { donation.user.tagName} for the amount of { donation.amount }!</section>
        <br></br>
<div className="donation__business">Your collaboration with { donation.business.name }</div>
<div className="donation__user">helped {donation.user.tagName} with: { donation.issue } </div>
    </section>
)

// how do I render two seperate messages
// when I delete request, it must stay on page and remove from both the charity page and database. 

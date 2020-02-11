import React from "react"
import { Link } from "react-router-dom"

export default ({ donation}) => (
    <section className="donation">
        <h3 className="donation__tagName">
            <Link to={`/donations/${donation.userid}`}>
                { donation.userId}
            </Link>
        </h3>
        <div className="donation__issue">{ donation.issue }</div>
    </section>
)
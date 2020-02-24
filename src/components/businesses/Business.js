import React from "react"
// import "./businesss.css"
import { Link } from "react-router-dom"

export default ({ business }) => (
    <section className="business">
        <h2 className="business__name">
            <Link to={`/businesses/${business.id}`}>
                { business.name }
            </Link>
        </h2>
        <h3 className="business__breed">{ business.address }</h3>
        <div className="business__breed">{ business.businessType.type }</div>
    </section>
)
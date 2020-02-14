import React from "react"
import "./Businesses.css"

export default ({business }) => (
    <section className="business">
        <h3 className="business__name"> { business.name }</h3>
        <div>ADDRESS: {business.address}</div>
        <div className="business__businessType">TYPE: { business.businessType.type }</div>
    </section>
)
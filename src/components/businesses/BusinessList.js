import React, { useContext } from "react"
import { BusinessContext } from "./BusinessProvider"
import Business from "./Business"
import "./Businesses.css"
import { BusinessTypeContext } from "../businesses/BusinessTypeProvider"

export default (props) => {
    const { businesses } = useContext(BusinessContext)
    const { businessTypes } = useContext(BusinessTypeContext)
    console.log(businesses)

    return (
        <>
        <div>

        <h1 className="businessHeader">
            BUSINESS PARTNERS
        </h1>
        </div>
        <div className="businesses">
            {
                businesses.map(business => {
                    const type = businessTypes.find(l => l.id === business.businessTypeId)
                    console.log(businessTypes, businesses)
                    
                    return <Business key={business.id} 
                    businessType={type}
                    business={business} />
                    
                })
                
            }
    
        </div>
            </>
             
    )
}

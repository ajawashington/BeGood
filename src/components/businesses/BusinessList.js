import React, { useContext } from "react"
import { BusinessContext } from "./BusinessProvider"
import Business from "./Business"
// import "./Businesss.css"
import { BusinessTypeContext } from "./BusinessTypeProvider"

export default (props) => {
    const { businesses } = useContext(BusinessContext)
    const { businessTypes } = useContext(BusinessTypeContext)

    return (
        <div className="businesses">
            {
            businesses.map(business => {
            const type = businessTypes.find(bt => bt.id === business.BusinessTypeId)
            console.log(businessTypes, businesses)
            
            return <Business key={business.id} 
            BusinessType={type}
            Business={business} />

        })
        }
        
         <div className="businesses">
        <button onClick={() => props.history.push("/businesses/create")}>
            Add Business
        </button>
            </div>  
        </div>
             
    )
}


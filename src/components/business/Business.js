import React from "react"
import { Link } from "react-router-dom"

export default ({ business }) => (
    <div className="businesses">
       <div className="business__item">
       <div>
           <h1 className="business__link"><Link className="business__link" to={`/businesses/${business.id}`}>{ business.name }</Link></h1>
           </div> 
       <div>
           <h2 className="business__link">{ business.businessType.type }</h2>
           </div> 
       </div>
    </div>


)
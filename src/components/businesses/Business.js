import React, { useContext } from "react"
// import "./Businesss.css"
import { BusinessContext } from "./BusinessProvider";
// import { BusinessTypeContext } from "../BusinessTypeProvider";


export default ({ business, businessType,  history }) => {
    const { updateBusiness } = useContext(BusinessContext)
    // const { businessTypes } = useContext(BusinessTypeContext)
  
       
    const activeUserBusinesses = (business, history ) => {

        
    if(business.userId === parseInt(localStorage.getItem("beyGood_user"), 10)){
    return(
    
    <div> 
      <button className= "active__request" 
            onClick={() => {
               history.push(`/businesses/edit/${business.id}`)
            }}>Edit</button>
    
        <button onClick={
            () => {
                updateBusiness(business)
                .then(() => {
                    history.push("/donor")            
                })
            }}>
      Update Business
        </button>
    
    </div>
    
    )} else { 
    
            return(
                
            <section className="business">
                <h3 className="Business__tagName">{business.businessType.type}</h3>
                <div className="Business__issue">{business.name}</div>
                <div className="Business__amount">{ business.address }</div>
                {/* <div className="Business__business">{ Business.business.name }</div> */}
                {activeUserBusinesses(business, history)}

            </section>
        
        )
            }


            }
        }
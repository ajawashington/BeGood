import React from "react"
import { Route } from "react-router-dom"
import CharityRequestList from "./charity/CharityRequestList"
import CharityRequestForm from "./charity/CharityRequestForm"
import DonationList from "./donations/DonationList"
import ProviderProvider from "./ProviderProvider"
// import DashboardList from "./dashboard/DashboardList"
import BusinessList from "./businesses/BusinessList"
import BusinessDetails from "./businesses/BusinessDetails"


export default props => {
    return (
        <>
     <ProviderProvider>
     <Route exact path="/business" render={props => <BusinessList {...props} />} />

     <Route exact path="/businesses/:businessId(\d+)" render={props => <BusinessDetails {...props} />} />
        <Route exact path="/" render={props => <CharityRequestForm {...props} />} />
        <Route exact path="/" render={props => <DonationList {...props} />} />
        <Route exact path="/donor" render={props => <CharityRequestList {...props} />} />
        <Route path="/:charityRequestId(\d+)"render={props => <CharityRequestForm {...props} />} />


        {/* <Route path="/edit/:charityRequestId(\d+)"render={props => <CharityRequestForm {...props} />} /> */}

</ProviderProvider>

</>
)
}
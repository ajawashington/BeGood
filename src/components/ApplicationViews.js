import React from "react"
import { Route } from "react-router-dom"
import CharityRequestList from "./charity/CharityRequestList"
import CharityRequestForm from "./charity/CharityRequestForm"
import DonationList from "./donations/DonationList"
import ProviderProvider from "./ProviderProvider"
// import DashboardList from "./dashboard/DashboardList"
import BusinessList from "./businesses/BusinessList"
// import BusinessTypeDetails from "./businesses/BusinessTypeDetails"


export default props => {
    return (
        <>
     <ProviderProvider>
     <Route exact path="/business" render={props => <BusinessList {...props} />} />

     {/* <Route exact path="/business" render={props => <BusinessTypeDetails {...props} />} /> */}
        {/* <Route exact path="/user" render={props => <DashboardList {...props} />} /> */}
        <Route exact path="/" render={props => <DonationList {...props} />} />
        <Route exact path="/donor" render={props => <CharityRequestList {...props} />} />
        <Route exact path="/charity" render={props => <CharityRequestForm {...props} />} />
        <Route path="/charity/edit/:charityRequestId(\d+)"render={props => <CharityRequestForm {...props} />} />
</ProviderProvider>

</>
)
}
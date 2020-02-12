import React from "react"
import { Route } from "react-router-dom"
import { CharityRequestProvider } from "./charity/CharityRequestProvider"
import CharityRequestList from "./charity/CharityRequestList"
import CharityRequestForm from "./charity/CharityRequestForm"
import { UserProvider } from "./users/UserProvider"
import { BusinessProvider } from "./businesses/BusinessProvider"
import { DonationProvider } from "./donations/DonationProvider"
// import UserList from "./users/UserList"
import DonationList from "./donations/DonationList"
import BusinessList from "./businesses/BusinessList"
import { BusinessTypeProvider } from "./businesses/BusinessTypeProvider"
import BusinessForm from "./businesses/BusinessForm"
import DonationDetails from "./donations/DonationDetails"


export default props => {
    return (
        <>
      <UserProvider>
      
      
          <DonationProvider>
        <UserProvider>
          <BusinessProvider>
            <CharityRequestProvider>



        {/* <Route exact path="/user" render={props => <UserList {...props} />} /> */}
        <Route exact path="/user" render={props => <DonationList {...props} />} />
        <Route path="/donations/:DonationId(\d+)" render={
          props => <DonationDetails {...props} />
        } />
            
        </CharityRequestProvider>
          </BusinessProvider>
            </UserProvider>
                </DonationProvider>

              <BusinessProvider>
                <BusinessTypeProvider>

      <Route exact path="/businesses" render={props => <BusinessList {...props} />} />
      <Route path="/businesses/create" render={props => <BusinessForm {...props} />} />
                </BusinessTypeProvider>
            </BusinessProvider>



      <CharityRequestProvider>
          <DonationProvider>
              <BusinessProvider>

      <Route exact path="/donor" render={props => <CharityRequestList {...props} />} />
      <Route exact path="/charity" render={props => <CharityRequestForm {...props} />} />
      <Route path="/charity/edit/:charityRequestId(\d+)" 
        render={props => <CharityRequestForm {...props} />} />

               </BusinessProvider>
            </DonationProvider>
        </CharityRequestProvider>


        
      </UserProvider>
        
        </>
    )
}
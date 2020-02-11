import React from "react"
import { Route } from "react-router-dom"
import { CharityRequestProvider } from "./charity/CharityRequestProvider"
import CharityRequestList from "./charity/CharityRequestList"
import CharityRequestForm from "./charity/CharityRequestForm"
import { UserProvider } from "./users/UserProvider"
import { BusinessProvider } from "./businesses/BusinessProvider"
import { DonationProvider } from "./donations/DonationProvider"
import UserList from "./users/UserList"


export default props => {
    return (
        <>
      <UserProvider>
        
        <DonationProvider>
          <UserProvider>
      <Route exact path="/user" render={props => <UserList {...props} />} />
          </UserProvider>
        </DonationProvider>


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
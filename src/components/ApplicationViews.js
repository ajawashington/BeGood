import React from "react"
import { Route } from "react-router-dom"
import { CharityRequestProvider } from "./charity/CharityRequestProvider"
import CharityRequestList from "./charity/CharityRequestList"
import CharityRequestForm from "./charity/CharityRequestForm"
import { UserProvider } from "./users/UserProvider"
import { BusinessProvider } from "./businesses/BusinessProvider"
import { DonationProvider } from "./donations/DonationProvider"
import { UserList } from "./users/UserList"


export default props => {
    return (
        <>
        <UserProvider>
          
          <UserProvider>

        <Route exact path="/user" render={props => <UserList {...props} />} />
          </UserProvider>

      <CharityRequestProvider>
          <BusinessProvider>
            <DonationProvider>



        <Route exact path="/donor" render={props => <CharityRequestList {...props} />} />

        <Route exact path="/charity" render={props => <CharityRequestForm {...props} />} />
            <Route
               path="/charity/edit/:charityRequestId(\d+)"
               render={props => <CharityRequestForm {...props} />}
               />
               {/* <Route path="/charity/:charityRequestId(\d+)" render={
                            props => <CharityRequestDetails {...props} />
                          } /> */}
                          </DonationProvider>
               </BusinessProvider>
      </CharityRequestProvider>
      

        </UserProvider>
        
        </>
    )
}
import React from "react"
import { Route } from "react-router-dom"
import { CharityRequestProvider } from "./charity/CharityRequestProvider"
import CharityRequestList from "./charity/CharityRequestList"
import CharityRequestForm from "./charity/CharityRequestForm"
import { UserProvider } from "./users/UserProvider"
import { BusinessProvider } from "./businesses/BusinessProvider"


export default props => {
    return (
        <>
        <UserProvider>

      <CharityRequestProvider>
          <BusinessProvider>

        <Route exact path="/donor" render={props => <CharityRequestList {...props} />} />

        <Route exact path="/charity" render={props => <CharityRequestForm {...props} />} />
            <Route
               path="/charity/edit/:charityRequestId(\d+)"
               render={props => <CharityRequestForm {...props} />}
               />
               </BusinessProvider>
      </CharityRequestProvider>
      

        </UserProvider>
        
        </>
    )
}
import React from "react";
import { Switch, Route } from "react-router-dom";
import DataProvider from "./DataProvider";
import BusinessList from "./business/BusinessList";
// import CharityRequestList from "./charity/CharityRequestList";
// import CharityRequestForm from "./charity/CharityRequestForm";
// import DonationList from "./donations/DonationList";
// import BusinessDetails from "./business/BusinessDetails";
// import ProfilePage from "./ProfilePage";

export default (props) => {
  return (
    <>
      <DataProvider>
        {/* <Route
          exact
          path="/profile"
          render={(props) => <ProfilePage {...props} />}
        /> */}
        <Switch>
          <Route exact path={["/", "/businesses"]} component={BusinessList} />
          {/* <Route exact path="/add" component={BusinessForm} /> */}
        </Switch>
        {/* <Route
          exact
          path="/businesses/:businessId(\d+)"
          render={(props) => <BusinessDetails {...props} />}
        />
        <Route
          exact
          path="/request"
          render={(props) => <CharityRequestForm {...props} />}
        />
        <Route exact path="/" render={(props) => <DonationList {...props} />} />
        <Route
          exact
          path="/donor"
          render={(props) => <CharityRequestList {...props} />}
        />
        <Route
          path="/:charityRequestId(\d+)"
          render={(props) => <CharityRequestForm {...props} />}
        /> */}
      </DataProvider>
    </>
  );
};

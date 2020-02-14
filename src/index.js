import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import BeyGood from "./components/BeyGood"
// import { TrackerProvider, Tracker } from 'react-tracker'
// import { trackProductClick } from './tracking/donationsAndRequests/completed'

// const tracker = new Tracker([trackProductClick])

ReactDOM.render(
    <Router>
        {/* <TrackerProvider> */}
        <BeyGood/>
        {/* </TrackerProvider> */}
    </Router>
    , document.getElementById("root"))
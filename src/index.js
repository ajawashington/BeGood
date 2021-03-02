import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import BeGood from "./components/BeGood"


ReactDOM.render(
    <Router>
        <BeGood/>
    </Router>
    , document.getElementById("root"))
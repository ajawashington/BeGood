import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "./logo.jpg"

export default (props) => {
    return (
        <ul className="navbar">
           
                <Link className="navbar__link" to="/">
                <img src={logo}/>
                </Link>
                
            <li className="navbar__item">
                <Link className="navbar__link" to="/donor">MAKE A DONATION</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/business">BUSINESS PARTNERS</Link>
            </li>


{
    localStorage.getItem("beyGood_user")
        ? <li className="navbar__item">
            <Link className="navbar__link"
                to=""
                onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem("beyGood_user")
                    props.history.push("/")
                }}
            >Logout</Link>
        </li>
        : ""
}
        </ul>
    )
}
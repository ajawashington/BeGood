import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/charity">Charity</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/donor">Donor</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/business">Partners</Link>
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
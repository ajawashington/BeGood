import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">beyGood Dashboard</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/user">Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/charity">I Need Help</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/donor">I Want To Help</Link>
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
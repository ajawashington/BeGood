import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./Logins.css"


const Login = props => {
    const tagName = useRef()
    const password = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:4444/users?tagName=${tagName.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return user[0]
                }
                return false
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    localStorage.setItem("beyGood_user", exists.id)
                    props.history.push("/")
                } else if (exists && exists.password !== password.current.value) {
                    window.alert("Password does not match")
                } else if (!exists) {
                    fetch("http://localhost:4444/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            tagName: tagName.current.value,
                            password: password.current.value,
                        })
                    })
                        .then(_ => _.json())
                        .then(response => {
                            localStorage.setItem("beyGood_user", response.id)
                            props.history.push("/")
                        })
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>beyGood</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputtagName"> Tag Name </label>
                        <input ref={tagName} type="tagName"
                            id="tagName"
                            className="form-control"
                            placeholder="tag name"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                    </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
export default Login
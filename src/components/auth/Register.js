import React, { useRef } from "react"
import "./Logins.css"

const Register = props => {
    const tagName = useRef()
    const password = useRef()
    const verifyPassword = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:4444/users?tagName=${tagName.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return true
                }
                return false
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
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
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("beyGood_user", createdUser.id)
                                props.history.push("/")
                            }
                        })
                })
        } else {
            window.alert("Passwords do not match")
        }
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for beyGood</h1>
                <fieldset>
                    <label htmlFor="inputtagName"> Tag Name </label>
                    <input ref={tagName} type="tagName"
                        name="tagName"
                        className="form-control"
                        placeholder="Tag Name"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}

export default Register
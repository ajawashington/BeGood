import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const UserContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:444/users?_expand=user")
            .then(res => res.json())
            .then(setUsers)
    }

    const addUser = newUser => {
      return fetch("http://localhost:444/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
      })
          .then(getUsers)
  }

    const deleteUser = user => {
        return fetch(`http://localhost:444/users/${user.id}`, {
            method: "DELETE",
        })
            .then(getUsers)
    }

   
    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        console.log("****  User APPLICATION STATE CHANGED  ****")
    }, [users])

    return (
        <UserContext.Provider value={{
            users, addUser, deleteUser, getUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
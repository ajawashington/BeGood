// import React, { useContext } from "react"
// import { UserContext } from "./UserProvider"
// import User from "./User"
// // import "./users.css"
// import { DonationContext } from "../donations/DonationProvider"

// export default () => {
//     const { users } = useContext(UserContext)
//     const { donations } = useContext(DonationContext)

//     return (
//         <div className="users">
//             {
//                 users.map(u => {
//                     const donationsHere = donations.filter(
//                         (donation) => {
//                             return u.id === donation.userId
//                         }
//                     )
//                     return <User key={u.id}
//                                      Donations={donationsHere}
//                                      User={u} />
//                 })
//             }
//         </div>
//     )
// }
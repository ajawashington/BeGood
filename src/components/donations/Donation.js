import React from "react"


export default ({ donation }) => (
    <section className="donation">
        <div>

        <img className="img" src={donation.user.url}/> 
        </div>
                
        Thank you for your generous donation you made to { donation.user.tagName} for the amount of { donation.amount }! 
        The collaboration with { donation.business.name } helped {donation.user.tagName} tremendously.
        <h3> DONOR: { donation.donor.tagName} 
                </h3>
    </section>
)

// how do I render two seperate messages
// when I delete request, it must stay on page and remove from both the charity page and database. 
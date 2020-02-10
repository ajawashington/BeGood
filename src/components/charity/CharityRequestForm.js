import React, { useContext, useState, useEffect, useRef } from "react"
import { CharityRequestContext } from "./CharityRequestProvider"
import "./CharityRequests.css"
import { BusinessContext } from "../businesses/BusinessProvider"
// import { DonorContext } from "../donations/DonationProvider"

export default props => {
    const { addCharityRequest, updateCharityRequest, charityRequests } = useContext(CharityRequestContext)
    const { businesses } = useContext(BusinessContext)
    const [charityRequest, setCharityRequest] = useState({})
    const business = useRef(0)
    const businessName = useRef("")
    // const { donors } = useContext(DonorContext)

    const editMode = props.match.params.hasOwnProperty("charityRequestId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newCharityRequest = Object.assign({}, charityRequest)
        newCharityRequest[evt.target.name] = evt.target.value
        setCharityRequest(newCharityRequest)
    }

    const setDefaults = () => {
        if (editMode) {
            const charityRequestId = parseInt(props.match.params.charityRequestId)
            const businessId = parseInt(props.match.params.businessId)
            const selectedCharityRequest = charityRequests.find(a => a.id === charityRequestId) || {}
            const selectedBusiness = businesses.find(b => b.id === businessId) || {}
            setCharityRequest(selectedCharityRequest, selectedBusiness)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [charityRequests, businesses])

    const constructNewCharityRequest = () => {

        const businessId = parseInt(business.current.value)

        if (editMode) {
            updateCharityRequest({
                id: charityRequest.id,
                issue: charityRequest.issue,
                amount: charityRequest.amount,
                businessId: businessId,
                userId: parseInt(localStorage.getItem("beyGood_user"), 10)
            })
                .then(() => props.history.push("/donor"))
        } else {
            addCharityRequest({
                issue: charityRequest.issue,
                amount: charityRequest.amount,
                businessId: businessId,
                userId: parseInt(localStorage.getItem("beyGood_user"), 10)
            })
            .then(() => props.history.push("/donor"))
        }
        }
    


    return (
        <form className="CharityRequestForm">
            <h2 className="CharityRequestForm__title">{editMode ? "Edit Charity Request" : "New Charity Request"}</h2>
            <fieldset>

            <div className="form-group">
                <label htmlFor="issue">Issue</label>
                <input
                    type="text"
                    id="issue"
                    name="issue"
                    defaultValue={charityRequest.issue}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Charity Request Issue"
                    proptype="varchar"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                    <fieldset>
                        
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                    type="text"
                    id="amount"
                    name="amount"
                    defaultValue={charityRequest.amount}
                    required
                    className="form-control"
                    proptype="varchar"
                    placeholder="Amount"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                    <fieldset>
                <div className="form-group">
                    <label htmlFor="business">Business </label>
                    <select
                        defaultValue=""
                        name="business"
                        ref={business}
                        ref={businessName}
                        className="form-control"
                    >
                        <option value="0">Select a Business</option>
                        {businesses.map(b => (
                            <option key={b.id} value={b.id}>
                                {b.businessName}
                            </option>
                              
                        ))}
                    </select>
                </div>
            </fieldset>
                    
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewCharityRequest()
                    }}
                className="btn btn-primary"> {editMode ? "Update Charity Request": "Make Charity Request"} </button>
        </form>
    )
}
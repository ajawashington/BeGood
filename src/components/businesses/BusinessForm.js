import React, { useContext, useState, useEffect, useRef } from "react"
import { BusinessContext } from "./BusinessProvider"
// import "./Businesses.css"
import { BusinessTypeContext } from "./BusinessTypeProvider"
// import { DonorContext } from "../donations/DonationProvider"

export default props => {
    const { addBusiness, updateBusiness, businesses } = useContext(BusinessContext)
    const { businessTypes } = useContext(BusinessTypeContext)
    const [business, setBusiness] = useState({})
    const businessType = useRef(0)

    const editMode = props.match.params.hasOwnProperty("businessId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newBusiness = Object.assign({}, business)
        newBusiness[evt.target.name] = evt.target.value
        setBusiness(newBusiness)
    }

    const setDefaults = () => {
        if (editMode) {
            const businessId = parseInt(props.match.params.businessId)
            const businessTypeId = parseInt(props.match.params.businessId)
            const selectedBusiness = business.find(a => a.id === businessId) || {}
            const selectedBusinessType = businessTypes.find(b => b.id === businessTypeId) || {}
            setBusiness(selectedBusiness, selectedBusinessType)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [business, businesses])

    const constructNewBusiness = () => {

        const businessTypeId = parseInt(businessType.current.value)

        if (editMode) {
            updateBusiness({
                id: business.id,
                name: business.name,
                address: business.address,
                businessTypeId: businessTypeId,
            })
                .then(() => props.history.push("/businesses"))
        } else {
            addBusiness({
                name: business.name,
                address: business.address,
                businessTypeId: businessTypeId,
            })
            .then(() => props.history.push("/businesses"))
        }
        }
    


    return (
        <form className="BusinessForm">
            <h2 className="BusinessForm__title">{editMode ? "Edit Charity Request" : "New Charity Request"}</h2>
            <fieldset>

            <div className="form-group">
                <label htmlFor="issue">Name</label>
                <input
                    type="text"
                    id="issue"
                    name="issue"
                    defaultValue={business.name}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Business Name"
                    proptype="varchar"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                    <fieldset>
                        
            <div className="form-group">
                <label htmlFor="amount">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={business.address}
                    required
                    className="form-control"
                    proptype="varchar"
                    placeholder="address"
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
                        ref={businessType}
                        className="form-control"
                    >
                        <option value="0">Select a Business Type</option>
                        {businessTypes.map(b => (
                            <option key={b.id} value={b.id}>
                                {b.type}
                            </option>
                              
                        ))}
                    </select>
                </div>
            </fieldset>
                    
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewBusiness()
                    }}
                className="btn btn-primary"> {editMode ? "Update Business": "Make Business"} </button>
        </form>
    )
}
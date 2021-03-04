// import React, { useContext, useState, useEffect, useRef } from "react";
// import { CharityRequestContext } from "../../helpers/providers/CharityRequestProvider";
// import { BusinessContext } from "../../helpers/providers/BusinessProvider";

// export default (props) => {
//   const {
//     addCharityRequest,
//     updateCharityRequest,
//     charityRequests,
//   } = useContext(CharityRequestContext);
//   const { businesses } = useContext(BusinessContext);
//   const [charityRequest, setCharityRequest] = useState({});
//   const business = useRef(0);

//   const editMode = props.match.params.hasOwnProperty("charityRequestId");

//   const handleControlledInputChange = (evt) => {
//     const newCharityRequest = Object.assign({}, charityRequest);
//     newCharityRequest[evt.target.name] = evt.target.value;
//     setCharityRequest(newCharityRequest);
//   };

//   const setDefaults = () => {
//     if (editMode) {
//       const charityRequestId = parseInt(props.match.params.charityRequestId);
//       const selectedCharityRequest =
//         charityRequests.find((a) => a.id === charityRequestId) || {};
//       setCharityRequest(selectedCharityRequest);
//     }
//   };

//   useEffect(() => {
//     setDefaults();
//   }, [charityRequests, businesses]);

//   const constructNewCharityRequest = () => {
//     const businessId = parseInt(business.current.value);

//     if (editMode) {
//       updateCharityRequest({
//         id: charityRequest.id,
//         issue: charityRequest.issue,
//         amount: charityRequest.amount,
//         item: charityRequest.item,
//         businessId: businessId,
//         userId: parseInt(localStorage.getItem("BeGood_user"), 10),
//       }).then(() => props.history.push("/donor"));
//     } else {
//       addCharityRequest({
//         issue: charityRequest.issue,
//         amount: charityRequest.amount,
//         item: charityRequest.item,
//         businessId: businessId,
//         userId: parseInt(localStorage.getItem("BeGood_user"), 10),
//       }).then(() => props.history.push("/donor"));
//     }
//   };

//   return (
//     <form className="CharityRequestForm">
//       <h2 className="CharityRequestForm__title">
//         {editMode ? "EDIT CHARITY REQUEST" : "NEW CHARITY REQUEST"}
//       </h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="issue">Issue</label>
//           <input
//             type="text"
//             id="issue"
//             name="issue"
//             defaultValue={charityRequest.issue}
//             required
//             autoFocus
//             className="form-control"
//             placeholder="Charity Request Issue"
//             proptype="varchar"
//             onChange={handleControlledInputChange}
//           />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="amount">Amount</label>
//           <input
//             type="text"
//             id="amount"
//             name="amount"
//             defaultValue={charityRequest.amount}
//             required
//             className="form-control"
//             proptype="varchar"
//             placeholder="Amount"
//             onChange={handleControlledInputChange}
//           />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="item">Item</label>
//           <input
//             type="text"
//             id="item"
//             name="item"
//             defaultValue={charityRequest.item}
//             required
//             className="form-control"
//             proptype="varchar"
//             placeholder="Item"
//             onChange={handleControlledInputChange}
//           />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="business">Business </label>
//           <select
//             value={charityRequest.businessId}
//             name="businessId"
//             ref={business}
//             className="form-control"
//             onChange={handleControlledInputChange}
//           >
//             <option value="0">Select a Business</option>
//             {businesses.map((b) => (
//               <option key={b.id} value={b.id}>
//                 {b.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </fieldset>

//       <button
//         type="submit"
//         onClick={(evt) => {
//           evt.preventDefault();
//           constructNewCharityRequest();
//         }}
//         className="btn btn-primary"
//       >
//         {" "}
//         {editMode ? "Update Charity Request" : "Make Charity Request"}{" "}
//       </button>
//     </form>
//   );
// };

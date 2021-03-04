import React, { useContext } from "react";
import { CharityRequestContext } from "../../helpers/providers/CharityRequestProvider";
import { DonationContext } from "../../helpers/providers/DonationProvider";


export default ({ charityRequest, history, match }) => {
  const { deleteCharityRequest } = useContext(CharityRequestContext);
  const { addDonation } = useContext(DonationContext);

  const completedCharityRequest = () => {
    addDonation({
      id: charityRequest.id,
      issue: charityRequest.issue,
      amount: charityRequest.amount,
      item: charityRequest.item,
      userId: charityRequest.userId,
      businessId: charityRequest.businessId,
      donorId: parseInt(localStorage.getItem("BeGood_user"), 10),
    });
  };

  const activeUserRequests = (charityRequest, history) => {
    if (
      charityRequest.userId ===
      parseInt(localStorage.getItem("BeGood_user"), 10)
    ) {
      return (
        <div>
          <button
            className="active__charityRequest"
            onClick={() => {
              history.push(`/${charityRequest.id}`);
            }}
          >
            Edit
          </button>

          <button
            onClick={() => {
              if (match.url === "/") {
                deleteCharityRequest(charityRequest);
              } else {
                deleteCharityRequest(charityRequest).then(() => {
                  history.push("/donor");
                });
              }
            }}
          >
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="donate"
          id={`charityRequest--${charityRequest.donor}`}
          onClick={() => {
            window.alert("'OK' to Confirm Donation");
            completedCharityRequest(charityRequest);
            deleteCharityRequest(charityRequest);
          }}
        >
          DONATE
        </button>
      );
    }
  };

  return (
    <>
      <section className="charityRequest">
        <div>
          {/* <img className="img" src={charityRequest.user.url} /> */}
          <h3>
            {charityRequest.user.tagName} needs {charityRequest.item}.
          </h3>
        </div>
        <div>The issue is "{charityRequest.issue}"</div>
        <div className="charityRequest__amount">
          This will cost {charityRequest.amount} at{" "}
          {charityRequest.business.name}
        </div>
        {activeUserRequests(charityRequest, history)}
      </section>
    </>
  );
};

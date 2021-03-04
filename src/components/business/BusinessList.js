import React, { useContext } from "react";
import { BusinessContext } from "../../helpers/providers/BusinessProvider";
import Business from "./Business";
import { BusinessTypeContext } from "../../helpers/providers/BusinessTypeProvider";

export default (props) => {
  debugger
  const { businesses } = useContext(BusinessContext);
  const { businessTypes } = useContext(BusinessTypeContext);
  console.log(businesses);

  return (
    <>
      <div>
        <h1 className="businessHeader">Business Partners</h1>
      </div>
      <div className="businesses">
        {businesses.map((business) => {
          const type = businessTypes.find(
            (l) => l.id === business.businessTypeId
          );
          console.log(businessTypes, businesses);

          return (
            <Business
              key={business.id}
              businessType={type}
              business={business}
            />
          );
        })}
      </div>
    </>
  );
};

import React from "react";
// import { CharityRequestProvider } from "../helpers/providers/CharityRequestProvider";
import { BusinessProvider } from "../helpers/providers/BusinessProvider";
// import { DonationProvider } from "../helpers/providers/DonationProvider";
// import { BusinessTypeProvider } from "../helpers/providers/BusinessTypeProvider";
// import { DonorProvider } from "../helpers/providers/DonorProvider";

export default (props) => {
  return (
    <>
      {/* <CharityRequestProvider>
        <DonationProvider>
          <DonorProvider>
            <BusinessTypeProvider> */}
              <BusinessProvider>
                  {props.children}
              </BusinessProvider>
            {/* </BusinessTypeProvider>
          </DonorProvider>
        </DonationProvider>
      </CharityRequestProvider> */}
    </>
  );
};

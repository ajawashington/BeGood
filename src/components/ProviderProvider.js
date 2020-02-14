import React from "react"
import { UserProvider } from "./users/UserProvider"
import { CharityRequestProvider } from "./charity/CharityRequestProvider"
import { BusinessProvider } from "./businesses/BusinessProvider"
import { DonationProvider } from "./donations/DonationProvider"
import { BusinessTypeProvider } from "./businesses/BusinessTypeProvider"
import { DonorProvider } from "./donations/DonorProvider"

export default (props) => {
    return (
        <>
            <UserProvider>
                <CharityRequestProvider>
                        <DonationProvider>
                                <DonorProvider>
                            <BusinessTypeProvider>
                                <BusinessProvider>
                            {props.children}
                                </BusinessProvider>
                            </BusinessTypeProvider>
                                </DonorProvider>
                        </DonationProvider>
                </CharityRequestProvider>
            </UserProvider>
        </>
    )
}
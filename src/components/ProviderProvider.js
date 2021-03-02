import React from "react"
import { CharityRequestProvider } from "./charity/CharityRequestProvider"
import { BusinessProvider } from "./businesses/BusinessProvider"
import { DonationProvider } from "./donations/DonationProvider"
import { BusinessTypeProvider } from "./businesses/BusinessTypeProvider"
import { DonorProvider } from "./donations/DonorProvider"

export default (props) => {
    return (
        <>
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
        </>
    )
}
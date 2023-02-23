import React from "react";

const CountryItem = ({selectedCountry}) => {

    if(!selectedCountry) {
        return null
    }

    return (
        <>
        {selectedCountry.name.common}
        </>
    )
}

export default CountryItem
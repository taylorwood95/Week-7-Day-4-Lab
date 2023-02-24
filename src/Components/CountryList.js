import React from "react";
import ListItem from "./ListItem";

const CountryList = ({countries, onCountryClicked}) => {
    const countryItems = countries.map((country, index) => {
        return <ListItem onCountryClicked={onCountryClicked} country={country} key={index}/>
    })

    return (
        <div className="div">
            <h1>Countries</h1>
        <ul className="list-item">
            {countryItems}
        </ul>
        </div>
    )
}

export default CountryList;

import React from "react";

const ListItem = ({country, onCountryClicked, index}) => {

    const handleClick = function(){
        onCountryClicked(country)
        
        
        
    }


    return(
    <>
    <li value={index} onClick={handleClick}>Country: {country.name.common}</li>
    <span>Population: {country.population}</span>
    <br></br>
    <span>Capital: {country.capital}</span>
    
    </>
)}

export default ListItem;

import React from "react";

const ListItem = ({country, onCountryClicked, index}) => {

    const handleClick = function(){
        onCountryClicked(country)
        
        
        
    }


    return(
    <div className="list-div">
    <li  className="li-item" value={index} onClick={handleClick}>Country: {country.name.common}</li>
    <span className="li-span">Capital: {country.capital}</span>
    <img className="img" src={country.flags.png}/>
    <ul></ul>
     </div>
)}

export default ListItem;
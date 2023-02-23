import React, { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import CountryItem from "../Components/CountryItem";
import CountryList from "../Components/CountryList";
import CountrySelector from "../Components/CountrySelector";
import TitleBar from "../Components/TitleBar";

const CountryContainer = ({regions}) => {

    const[countries, setCountries] = useState([])
    const[selectedCountry, setSelectedCountry] = useState(null)


    const onCountrySelected  = (country) => {
        console.log("clicked")
        console.log(country)
        setSelectedCountry(country)
    }

    const onCountryClicked = function(country) {
        setSelectedCountry(countries[country])
    }

    useEffect(() => {
      getRegions(regions[0].url)
    }, [regions])


    const getRegions = url => {
        fetch(url)
        .then(results => results.json())
        .then(countries => setCountries(countries))
    }

    const handleSelectChange = event => {
        getRegions(event.target.value)
    }

 

    





    return (
        <div>
            {selectedCountry ? <CountrySelector selectedCountry={selectedCountry}/> : null}
            <TitleBar regions={regions} handleSelectChange={handleSelectChange}/>
            <CountryItem selectedCountry={selectedCountry}/>
            <CountryList countries={countries} onCountryClicked={onCountrySelected}/>
           
        
            </div>
    )
}

export default CountryContainer;
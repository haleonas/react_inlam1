import React, {useState} from 'react'
import Holidays from "./Holidays";
import Countries from "./Countries";

const CountryHoliday = () => {

    const [selectedCountry, setCountry] = useState('')

    return (
        <div className={"ui segment"}>
            <div className={'ui two column very relaxed grid'}>
                <div className={'column'}>
                    <Countries onSelectedCountry={(country) => setCountry(country)}/>
                </div>

                <div className={'column'}>
                    {selectedCountry && <Holidays selectedCountry={selectedCountry}/>}
                </div>
            </div>
            <div className={'ui vertical divider'}>{selectedCountry ? selectedCountry : 'Country'}</div>
        </div>
    )
}

export default CountryHoliday

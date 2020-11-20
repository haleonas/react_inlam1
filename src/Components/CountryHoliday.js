import React, {useState} from 'react'
import Holiday from "./Holiday";
import Countries from "./Countries";


const CountryHoliday = () => {

    /*`https://calendarific.com/api/v2/holidays?&api_key=de7eee7f32d4660a5a14cff44dbbad0dec117a15&country=${this.currentCountry.alpha2code}&year=${date}*/

    const [selectedCountry, setCountry] = useState('')
    console.log(selectedCountry)
    return (
        <div className={"ui segment"}>
            <div className={'ui two column very relaxed grid'}>
                <div className={'column'}>
                    <Countries selectedCountry={setCountry}/>
                </div>

                <div className={'column'}>
                    {selectedCountry && <Holiday selectedCountry={selectedCountry}/>}
                </div>
            </div>
            <div className={'ui vertical divider'}>Coolt?</div>

        </div>

    )
}

export default CountryHoliday

import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Countries = props => {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://calendarific.com/api/v2/countries?&api_key=01de13b4b8e3d6aa6e47d26cf5cc62f8017b61eb')
            setCountries(response.data.response.countries)
        }
        fetchData().then()
    }, [])

    const renderList = () => {
        return countries.map(country => {
            return <option key={country['uuid']} value={country['iso-3166']}> {country['country_name']}</option>
        })
    }

    return (
        <div className={'ui form'}>
            <select onChange={event => props.selectedCountry(event.target.value)}>
                <option value={""}/>
                {countries && renderList()}
            </select>
        </div>
    )
}

export default Countries


import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Countries = props => {
    const [countries, setCountries] = useState(null)

    /*'https://restcountries.eu/rest/v2/all'*/
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            setCountries(response.data)
        }

        fetchData().then()
    }, [])

    const renderList = () => {
        return countries.map(country => {
            return <option key={country['alpha2Code']} value={country['name']}> {country['name']}</option>
        })
    }
    //props.selectedCountry('Sweden')
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


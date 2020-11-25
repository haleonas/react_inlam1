import useCountries from "../Hooks/useCountries";

const Countries = ({onSelectedCountry}) => {
    const [countries,errorMessage] = useCountries()

    const renderList = () => {
        return countries.map(country => {
            return <option key={country['uuid']} value={country['iso-3166']}> {country['country_name']}</option>
        })
    }

    return (
        <div className={'ui form'}>
            <select onChange={event => onSelectedCountry(event.target.value)}>
                <option value={""}/>
                {countries && renderList()}
                {errorMessage ? errorMessage : null}
            </select>
        </div>
    )
}

export default Countries


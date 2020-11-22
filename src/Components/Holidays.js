import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Holiday from "./Holiday";

const Holidays = (props) => {

    const [holidays,setHolidays] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const year = new Date().getFullYear()
            const response = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=01de13b4b8e3d6aa6e47d26cf5cc62f8017b61eb&country=${props.selectedCountry}&year=${year}`)
            setHolidays(response.data.response.holidays)
        }
        fetchData().then()
    },[props.selectedCountry])

    function renderList(){
        return holidays.map(holiday => {
            return <Holiday holiday={holiday}/>
        })
    }

    return (
        <div className={'ui segment'}>
            {holidays && renderList()}
        </div>
    )
}

export default Holidays

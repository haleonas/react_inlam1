/* eslint-disable */
import {useState, useEffect} from 'react'
import Calenderific from "../Apis/Calenderific";

const useHolidays = (selectedCountry) => {
    const [holidays, setHolidays] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    async function fetchData(){
        try {
            const year = new Date().getFullYear()
            const response = await Calenderific.get('/holidays', {
                params: {
                    api_key: '01de13b4b8e3d6aa6e47d26cf5cc62f8017b61eb',
                    country: selectedCountry,
                    year: year
                }
            })
            setHolidays(response.data.response['holidays'])
        } catch (e) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        fetchData().then()
    }, [])

    return [holidays,errorMessage]
}

export default useHolidays

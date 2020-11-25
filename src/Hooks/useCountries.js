import {useEffect, useState} from 'react'
import Calenderific from "../Apis/Calenderific";

const useCountries = () => {
    const [countries, setCountries] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    async function fetchData() {
        try{
            const response = await Calenderific.get('/countries', {
                params: {
                    api_key: '01de13b4b8e3d6aa6e47d26cf5cc62f8017b61eb'
                }
            })
            setCountries(response.data.response.countries)
        } catch (e) {
            setErrorMessage('Something went wrong')
        }

    }

    useEffect(() => {
        fetchData().then()
    }, [])

    return [countries,errorMessage]
}

export default useCountries

import Holiday from "./Holiday";
import useHolidays from "../Hooks/useHolidays";

const Holidays = ({selectedCountry}) => {
    const [holidays,errorMessage] = useHolidays(selectedCountry)

    function renderList() {
        return holidays.map(holiday => {
            return <Holiday holiday={holiday}/>
        })
    }

    return (
        <div className={'ui segment'}>
            {holidays && renderList()}
            {errorMessage ? errorMessage: null}
        </div>
    )
}

export default Holidays

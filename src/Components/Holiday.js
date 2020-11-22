import React from 'react'

const Holiday = props => {
    return (
        <div key={props.holiday.iso}>
            <p>{props.holiday.date.datetime.year}-{props.holiday.date.datetime.month}-{props.holiday.date.datetime.day}</p>
            <p>{props.holiday.name}</p>
            <p>{props.holiday.description}</p>
            <hr/>
        </div>
    )
}

export default Holiday

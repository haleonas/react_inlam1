import React,{useContext} from 'react'
import {Link} from "react-router-dom";

import UserContext from "../Context/UserContext";

const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <div className={'ui secondary pointing menu'}>
            <Link to={'/'} className={'item'}>Home</Link>
            <div>{user ? user : 'Hi guest'}</div>
            <div className={'right menu'}>
                <Link to={'/country-holidays'} className={"item"}>Holidays</Link>
            </div>
        </div>
    )
}

export default Header

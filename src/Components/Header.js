import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import UserContext from "../Context/UserContext";
import styled from 'styled-components'

const Title = styled.div`
  font-size: 1.5em;
  color: #2da740;
`;

const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <div className={'ui secondary pointing menu'}>
            <Link to={'/'} className={'item'}>Home</Link>
            <div className={"item"}>
                <Title>{user ? user : 'Hi guest'}</Title>
            </div>
            <div className={'right menu'}>
                <Link to={'/country-holidays'} className={"item"}>Holidays</Link>
            </div>
        </div>
    )
}

export default Header

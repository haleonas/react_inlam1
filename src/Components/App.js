import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.css'
import Main from "./Main";
import Header from "./Header";
import CountryHoliday from "./CountryHoliday";
import UserContext from "../Context/UserContext";

const App = () => {
    const [user, setUser] = useState('')

    return (
        <div className={'ui container'}>

            <BrowserRouter>
                <UserContext.Provider value={{user, setUser}}>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path={'/'} exact component={Main}/>
                            <Route path={'/country-holidays'} exact component={CountryHoliday}/>
                        </Switch>
                    </div>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    )
}
export default App

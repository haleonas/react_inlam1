import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import 'semantic-ui-css/semantic.css'

import Main from "./Main";
import Header from "./Header";
import CountryHoliday from "./CountryHoliday";

const App = () => {

    return (
        <div className={'ui container'}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path={'/'} exact component={Main}/>
                    <Route path={'/country-holidays'} exact component={CountryHoliday}/>
                </div>

            </BrowserRouter>
        </div>
    )
}

export default App

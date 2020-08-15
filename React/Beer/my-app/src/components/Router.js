import React from 'react';
import {BrowserRouter,Switch,Route}from "react-router-dom";
// import MainRouter from "./main"
import * as routes from  "../constants/routes";
import Main from "./main"
import history from "../utils/history"
import favorities from "./favorites"


// const favorities = () => <h2>Favorites page</h2>;
const Router = () => (
    <BrowserRouter history={history}> 
        <Switch> 
        <Route exact path={routes.FAVORITES} component={favorities} /> 
        <Route exact path={routes.HOME} component={Main} />    
        </Switch>
    </BrowserRouter>
);
export default Router;
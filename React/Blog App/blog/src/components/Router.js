import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import * as routes from '../constants/routes';
import Main from './main';
import About from './about';
import Contact from './contact';

const Router= () => (
    <BrowserRouter>
    <Switch>
        <Route exact path={routes.CONTACT} component={Contact} />
        <Route exact path={routes.ABOUT} component={About} />
        <Route exact path ={routes.HOME} component={Main} />
    </Switch>
    </BrowserRouter>
)
export default Router;
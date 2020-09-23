import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import * as routes from '../constants/routes';
import history from "../utils/history"
import {BlogGrid} from './blogs';
import Home from './home'
import About from './about';
import Contact from './contact';
import Skills from './skills';
import Resume from './resume'
import Login from './login';
import Createblog from './blogs/createblog/createblog'
import FullBlog from './blogs/readmore/FullBlog';
import Comments from './blogs/readmore/comment/comment';


const Router= () => (
    <BrowserRouter history={history}>
    <Switch>
        <Route exact path={routes.COMMENTS} component={Comments}/>
        <Route exact path ={routes.FullBlog} component={FullBlog} />
        <Route exact path ={routes.CREATEBLOG} component={Createblog} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.RESUME} component={Resume} />
        <Route exact path={routes.CONTACT} component={Contact} />
        <Route exact path={routes.BLOGS} component={BlogGrid} />
        <Route exact path={routes.SKILLS} component={Skills} />
        <Route exact path={routes.ABOUT} component={About} />
        <Route exact path ={routes.HOME} component={Home} />
    </Switch>
    </BrowserRouter>
)
export default Router;
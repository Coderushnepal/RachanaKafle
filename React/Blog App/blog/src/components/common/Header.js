import React, { Component } from  'react';
import {Link} from 'react-router-dom';
import * as routes from "../../constants/routes";
import "../../assets/CSS/Header.css";



class Header extends  Component {
    render(){
        return(
            <header className="header">
                <div className="container">
                <div className="header__top">
                    <h1>Rachana's Blog</h1>
                    <button class="btn__login">Login</button>
                </div>
                 <div className="header__bottom">
                    <ul className="navbar left"> 
                            <li>
                            <Link to={routes.HOME} title="Home">Home</Link>
                            </li>
                            <li>
                            <Link to={routes.ABOUT} title="Contact">About Me</Link>
                            </li>
                            <li>
                            <Link to={routes.CONTACT} title="About">contact Me</Link>
                            </li>
                     </ul> 
                    <div className="search__bottom left">
                    </div>
                </div> 
                </div>
            </header>
        )
    }

}
export default Header
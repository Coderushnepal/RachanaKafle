
import React, { Component } from  'react';
import {Link} from 'react-router-dom';
import * as routes from "../../../constants/routes";
import "./Header.css"
 
 
 
class Header extends  Component {
   render(){
       return(
           <header>
               <div className="container clearfix">
                    <div className="header__right right" >
                        <ul className="navbar">
                                <li>
                                <Link to ={routes.HOME} title="Home">HOME</Link>              
                                </li>
                                <li>
                                <Link to={routes.ABOUT} title="about">ABOUT</Link>
                                </li>
                                <li>
                                    <Link to ={routes.SKILLS} title="skills">SKILLS</Link>                         
                                </li>
                                <li>
                                <Link to={routes.BLOGS} title="Home">BLOGS</Link>
                                </li>
                                <li>
                                <Link to={routes.CONTACT} title="About">CONTACT</Link>
                                </li>
                                <li>
                                    <Link to={routes.RESUME}>RESUME</Link>
                                </li>             
                            </ul>
                    </div>

                    <div class="header__left left" >
                    {/* style={{paddingTop:"10px"}} */}
                        <span>RACHANA KAFLE</span>
                    </div>
               </div>
           </header>
       )
   }
 
}
export default Header

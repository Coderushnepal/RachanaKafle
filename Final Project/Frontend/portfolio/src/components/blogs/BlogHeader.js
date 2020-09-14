import React, { Component } from  'react';
import {Link} from 'react-router-dom';
import * as routes from "../../constants/routes";
import "./BlogHeader.css"



class Header extends  Component {
    constructor(props) {
        super(props)
    
        this.state={
            searchText: "",
        };
    }
    handleTextChange = (event) => {
        this.setState({
            searchText:event.target.value,
        });
    };
   
    
    search = (event) => {
        event.preventDefault();
        this.props.setSearchText(this.state.searchText);
    };

    render(){
        return(
            <header className="header">
                <div className="container">
                <div className="header__top clearfix">
                    <h1>Rachana's Blog</h1>
                    <button class="btn__login">Login</button>

                </div>
                 <div className="header__bottom clearfix ">
                    <ul className="navbar left"> 
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
                    <div className="search__bottom  right">
                        <form  onSubmit={this.search} className="search-bar">
                            <input type="search"
                             placeholder="Search blog here"
                             value={this.state.searchText} 
                             onChange={this.handleTextChange} 
                             />   
                        </form>
                    </div>
                </div> 
                </div>
            </header>
        )
    }

}
export default Header
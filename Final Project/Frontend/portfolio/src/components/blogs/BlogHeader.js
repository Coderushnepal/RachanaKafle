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

     logout =() => {
         localStorage.clear('Token')
     }

    render(){
        const token= localStorage.getItem('Token');
        
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
                             <li>
                                { token ?
                                <button className="btn__logout" onClick={this.logout}>Logout</button>
                                :null
                                }
                            </li>  
                        
                    </ul>
                 </div>

                 {/* <div class="header__left left"  style={{paddingTop:"10px"}}>
                
                     <span>RACHANA KAFLE</span>
                 </div> */}
                 <div>

                 <div className="search__bottom">
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
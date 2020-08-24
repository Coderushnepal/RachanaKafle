import React, { Component } from  'react';
import '../assets/CSS/Header.css'

class Header extends  Component {
    render(){
        return(
            <header className="header">
                <div className="header__top">
                    <h1>Rachana's Blog</h1>
                </div>
            </header>
        )
    }

}
export default Header
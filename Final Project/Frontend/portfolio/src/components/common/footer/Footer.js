import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">

            <div className='container'>
                <div className="social-icons">
                    <div className='social-box'>
                         <a href="https://www.facebook.com/profile.php?id=100005656457913">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <div className='social-box'>
                        <a href="https://github.com/rachanakafle">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
    
                    <div className='social-box'>
                        <a href="https://www.linkedin.com/in/rachanakafle/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <p className="copyright-text">© 2020. Design By Rachana Kafle</p>
    
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;
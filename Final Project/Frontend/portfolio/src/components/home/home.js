import React ,{Component} from 'react';
// import {Header} from "../common"
import {Link} from 'react-router-dom';
import * as routes from "../../constants/routes";
import Footer from '../common/footer';
import Header from '../common/header/Header'
import "./home.css";

class Home extends Component {
    render(){
        return (
            <div>
               
               <Header />

            <section className="site-hero">
                <div className="container clearfix">
                    <div className="row"> 
                        <div className="site-text">
                            <h2 className="site-heading">Hey I am<br></br> <strong>Rachana Kafle</strong></h2>
                            <p className="site-subheading">I'm a passionate Software Engineer</p>
                            <Link to={routes.CONTACT} className="btn btn-primary">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </section>
                <Footer />
            </div>
        )
    }
}

export default Home           
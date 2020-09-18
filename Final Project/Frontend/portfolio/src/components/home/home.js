import React ,{Component} from 'react';
// import {Header} from "../common"
import Footer from '../common/footer';
import Header from '../common/header/Header'
import "./home.css"

class Home extends Component {
    render(){
        return (
            <div>
               
               <Header />
                Home page
               <Footer />

                
            </div>
        )
    }
}

export default Home
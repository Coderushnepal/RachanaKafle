import React ,{Component} from 'react';
// import {Header} from "../common"
import {Link} from 'react-router-dom';
import * as routes from "../../constants/routes";
import Footer from '../common/footer';
import Header from '../common/header/Header'
import "./home.css";

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// class Home extends Component {
//         constructor(props) {
//             super(props);
//             this.state ={
//                 items:[],
//                 isLoaded:false,
//             }
//         }
//      componentDidMount() {
//         // fetch('https://code-rush-rachana-user-api.herokuapp.com/')
//         fetch('http://localhost:8848/home')
//         .then(json=>{
//             console.log("kkkk")
//             .catch(err=>console.log(err))
//             this.setState({
//           isLoaded:true,
//           items:json,
//         })

//      });   
//     } 

//     render(){

//         var {isLoaded,items}=this.state

//         if(!isLoaded) {
//             return<div>Loading...</div>;
//         }
//         else {


//         return (
//             <div className="App">
//                 Data has been loaded
//                 <ul>
//                 {items.map(item =>(
//                     <li key={item.id}>
//                         text:{item.text} 

//                     </li>
                    

//                 ))};

              
//                  {/* {items.map(item => (
//                         <li key ={item.id}>
//                             {item.text}
//                         </li>
//                  ))} */}

//                 </ul>
                

//             </div>
//         );
//     }
// }   
// }











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
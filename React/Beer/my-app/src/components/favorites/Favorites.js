import React ,{Component} from 'react'
import Header from '../comman/Header'
// import { Component } from 'react'

// const Favorities = () => {
// <Header />
// <h2>Favorites page</h2>
// }
// export default Favorities


//load header in favorites page
class Favorites extends Component {
    render(){
        return(
        <div class="wrapper">     
         <Header />
         <h2>Favorites Page</h2> 
         </div>
        )  
    }
 
  }
  export default Favorites
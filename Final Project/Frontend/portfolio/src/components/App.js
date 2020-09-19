import React, { Component } from 'react';
import axios from 'axios';

import Router from "./Router"
import "./App.css"

const api = axios.create({
    baseURL: 'http://localhost:8848',
  });

// const App= () => <Router />;
// export default App;
class App extends Component {
    constructor(){
      super();
        
      api.get("/blogs").then((res) => {
          
        console.log(res.data);
      });
    }

    // api.post('/home', {
    //     text,
    //     image
    //    })
    //    .then((response) => {
    //      console.log(response);
    //    }, (error) => {
    //      console.log(error);
    //    });
     
    

    render(){
      return (
        <Router />
    );}
  }
  export default App;

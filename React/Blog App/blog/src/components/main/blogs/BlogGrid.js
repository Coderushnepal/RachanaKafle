// import React, {Component} from "react";
// import { Header } from "../../common";
 
// class  BlogGrid extends Component {
//     render(){
//         return(
//             <div>
//                 <Header />
//             </div>
//         )
//     }
// }

// export default BlogGrid



import React ,{ Component } from 'react';
import {dummyBlogsData} from "../../../constants/dummyData"
import Blog from "./blog"
import { Header } from '../../common';

 
 class BlogGrid extends Component {
  constructor(props){
    super(props)
  
  this.state={
    isLoading:true,
    //array ma data rakhne
    blogs:[],
  };
}
 
scrollPartnerRef=null
 
//dummydata call
fetchBlogs=async() => {
  setTimeout(()=> {
    this.setState({
      blogs:dummyBlogsData,
      isLoading:false,
    });
  },1000);
};
 
componentDidMount() {
  this.fetchBlogs();
 
} 
 
   render(){
    // const { isLoading } = this.state;
       return(
         <div>
        <Header />
           <main>
          <div className="container" 
          ref={(r) =>(this.scrollPartnerRef=r)}>
            {this.state.blogs.map(blog => (
              <Blog key={blog.id} info={blog} /> 
            ))}
          </div>
        </main> 
         ) 
        </div>
       ); 
   }
 }
 export default BlogGrid

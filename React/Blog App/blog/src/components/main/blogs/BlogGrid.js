
import React ,{ Component } from 'react';
// import InfiniteScroll from "react-infinite-scroll-component"
import {dummyBlogsData} from "../../../constants/dummyData"
import Blog from "./blog"
import { Header} from '../../common';



 
 class BlogGrid extends Component {
  constructor(props){
    super(props)
  
  this.state={
    isLoading:true,
    //data 
    blogs:[],
    searchFor:"",

    // //infinite scroll
    // pageInfo:{page:0,size:3},
    // hasMore:true,
  };
}
 
 
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

// fetchBlogsByName =async () => {

// }

setSearchText = (searchText) => {
  this.setState(
    {
      searchFor: searchText,
    },
    () => {
      this.fetchBlogs();
    }  
  );
};
 
   render(){
    // const { isLoading } = this.state;
       return(
         <div>
           <Header setSearchText={this.setSearchText}  />
           <main>
            {this.state.blogs.map(blog => (
              <Blog key={blog.id} info={blog} /> 
            ))}
        </main> 
         ) 
        </div>
       ); 
   }
 }
 export default BlogGrid

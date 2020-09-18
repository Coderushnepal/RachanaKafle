
import React ,{ Component } from 'react';
import {dummyBlogsData} from "../../constants/dummyData"
import Blog from "./Blog"
import { Spinner} from '../common';
import Header from './BlogHeader'
import Footer from '../common/footer/Footer';


 function searchingFor(searchText) {
  return function(x) {
      return x.blogTitle.toLowerCase().includes(searchText.toLowerCase()||searchText)
  }
}

 class BlogGrid extends Component {
  constructor(props){
    super(props)
  
  this.state={
    isLoading:true,
    //data 
    blogs:[],
    searchFor:"",
    isLoading: true,
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


setSearchText = (searchText) => {
  this.setState(
    {
      searchFor: searchText,
    }
    // () => {
    //   this.fetchBlogs();
    // }  
  );
};
 
   render(){
    const { searchFor,blogs,isLoading} = this.state;
       return(
         <div>
           <Header setSearchText={this.setSearchText}  />
          {/* <Spinner/> */}

          {isLoading ? (
                     <Spinner />
                 ) : (


                    <main>
                      {blogs.filter(searchingFor(searchFor)).map(blog => 
                        <Blog key={blog.id} info={blog} /> 
                      )}
                      </main>  
                  )} 
            <Footer />
        </div>
        
       ); 
   }
}
 export default BlogGrid



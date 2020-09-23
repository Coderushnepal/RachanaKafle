
import React ,{ Component } from 'react';
import Blog from "./Blog"
import { Spinner} from '../common';
import Header from './BlogHeader'
import { fetchBlogs  } from '../../services/blogServices'
import Footer from '../common/footer/Footer';
import {Link} from 'react-router-dom';
import * as routes from "../../constants/routes";


 function searchingFor(searchText) {
  return function(x) {
      return x.title.toLowerCase().includes(searchText.toLowerCase()||searchText)
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
 













//APi call
 fetchBlogs=async() => {
  // setTimeout(()=> {
    console.log("REtriving data ")
    const data = await fetchBlogs();
    this.setState({
      blogs:data,
      isLoading:false,
    });
  // },1000);
};
 
componentDidMount() {
  console.log("inside didMount")
  this.fetchBlogs();
} 

setSearchText = (searchText) => {
  this.setState(
    {
      searchFor: searchText,
    } 
  );
};
 
   render(){
    const { searchFor,blogs,isLoading} = this.state;
    const token= localStorage.getItem('Token');

       return(
         <div>
           {/* <Header /> */}
           <Header setSearchText={this.setSearchText}  />
              { token ?
                  <button className="btn__create">
                        <Link  style={{color:"white"}} to={routes.CREATEBLOG}><i class="fas fa-plus-circle"></i></Link> 
                  </button> 
                  :null 
               }  

              {/* <div className="search__bottom">
                    <form  onSubmit={this.search} className="search-bar">
                        <input type="search"
                            placeholder="Search blog here"
                            value={this.state.searchText} 
                             onChange={this.handleTextChange} 
                         />   
                     </form>
                    </div> */}








           {isLoading ? (
                     <Spinner />
                 ) : (
              <main>
                {/* {this.state.blogs.map(blog => (
                    <Blog key={blog.id} info={blog} /> 
                  ))}  */}
                      {blogs.filter(searchingFor(searchFor)).map(blog => 
                        <Blog key={blog.id} info={blog} id={blog.id}/> 
                      )} 
              </main>  
                   )}  
            <Footer />
        </div>
        
       ); 
   }
}
 export default BlogGrid



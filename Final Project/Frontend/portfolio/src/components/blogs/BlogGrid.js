
import React ,{ Component } from 'react';
import Blog from "./Blog"
import { Spinner} from '../common';
import Header from './BlogHeader'
import { fetchBlogs  } from '../../services/blogServices'
import Footer from '../common/footer/Footer';


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
       return(
         <div>
           {/* <Header /> */}
           <Header setSearchText={this.setSearchText}  />

           {isLoading ? (
                     <Spinner />
                 ) : (
              <main>
                {/* {this.state.blogs.map(blog => (
                    <Blog key={blog.id} info={blog} /> 
                  ))}  */}
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




import React,{Component} from 'react';
import "./Blog.css";
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes'
import axios from 'axios'
import { fetchBlogsById  } from '../../services/blogServices'


// import LikeCounter from '../HOC/LikeCounter';
class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // isLoading: true,
            blogsId: [],
        };
    }
   

    fetchBlogsById=async() => {
     
          console.log("blog with id ")
          const data = await fetchBlogsById(this.props.id);
          this.setState({
            blogsId:data,
            // isLoading:false,
          });
        //   this.props.history.push('/fullblog');
          console.log(data)
      };

       
      componentDidMount() {
        console.log("inside didmount")
        this.fetchBlogsById();
      } 

      deleteBlogs(id) {
          if(window.confirm('Are you sure?'))
          fetch('http://localhost:8848/blogs/'+id,{
            // fetch('http://localhost:8848/blogs/15',{
              method:'DELETE',
          });
          
      }



    render(){
        const{title,description,image,read_time,published_on,id}=this.props.info;
        console.log(this.props.info)
        const token= localStorage.getItem('Token');
        return (
            <div className="card">

                <div class="blog__image">
                <img src={image}></img>
                </div>

                <div class="blog__title">
                <h2>{title}</h2>
                <span style={{color:"red"}}>{published_on}</span>
                <span>{read_time}</span>
                </div>
                <div className="blog__description"> 
                    {description}
                </div><br></br>    
                <button className="btn__readmore">
                  <Link to={`/blogs/${id}`} style={{color:"white"}}>Read More</Link>
              </button>       
              {/* <br></br> */}

            <div className="btn__likedelete" clearfix>
                    {   token?
                <button className="btn__delete"
                // onClick={()=>this.deleteBlogs({`/blogs/${id}`})}>
                onClick= {() => this.deleteBlogs(id)}>
                <i class="far fa-trash-alt"></i>
                  </button>
                :null
                }                  
                {/* < LikeCounter />    */}
             </div>                
        </div>            
        );
    }
 
}
 
export default Blog


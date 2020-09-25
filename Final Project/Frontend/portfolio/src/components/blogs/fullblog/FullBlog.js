import React ,{Component} from 'react';
import { fetchBlogsById} from '../../../services/blogServices'
import "./FullBlog.css";
import LikeCounter from '../../HOC/LikeCounter'
import {Link} from 'react-router-dom';
import * as routes from '../../../constants/routes';
import CommentsDisplay from './comment/displaycomment/displaycomment';

class FullBlog extends Component {
    constructor(props) {
        console.log(props)
        super(props);

    this.state={
        //data 
        blog:{
            title: "",
            description: "",
            readTime:"",
            publishedOn:"",
            image:""
        }, 
      };
    }
     
      fetchFullBlogs=async() => {
            console.log("Retriving full  blogs data ")
            const id = this.props.match.params.id;
            console.log(id)
            const data = await fetchBlogsById(id);
            console.log("individual blog",data)
            this.setState({
                blog:data,
            });
      };
       
      componentDidMount() {
        console.log("inside didMount")
        this.fetchFullBlogs();
      } 

  

    render(){
        console.log(this.state.blog)
        const{title,description,image,readTime,publishedOn}=this.state.blog;
        console.log('This is title',title);

        return (
        //    <div className="blog__container" key={`blogs-${blog.id}`}>
      
        <div className="fullblog__container">             
               <div className="fullblog__title">
                 {title} 
                </div>
                <div className="published__readtime">
                <span style={{marginRight:"5px"}}>Published On: {publishedOn}</span>
                    <span>Read time: {readTime}</span>
                </div>
               <div className="fullblog__image">
                   <img src= {image}></img>
               </div>
                <div className="fullblog__text">
                    {description}
                </div>  
                <div className="commentlike__button" clearfix style={{
                    marginTop:"10px",
                    }}>
                
                    <span classsName="comment__button" style={{
                        fontSize:"30px" ,
                        float:"left",
                        marginRight:"40px" ,
                        marginLeft:"30px",
                        color:"red",
                        }} >
                    <Link to={routes.COMMENTS} style={{ color:"#358173" }}><i class="far fa-comments"></i></Link> 
                    </span>
                    <span style={{float:"left"}}>< LikeCounter /></span>   
                </div> 
                <div className="comment-section" style={{marginTop:"60px",marginLeft:"30px"}}>
                <CommentsDisplay />
                </div>    
           </div>            
        )
    }
}

export default FullBlog
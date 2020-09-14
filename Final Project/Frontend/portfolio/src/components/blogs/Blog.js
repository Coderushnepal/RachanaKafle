
import React,{Component} from 'react';
import "./Blog.css";
import LikeCounter from '../HOC/LikeCounter';
class Blog extends Component {
    // constructor(props){
    //     super(props);
    // }
 
    render(){
        const{blogTitle,blogText,blogImage}=this.props.info;
        console.log(blogImage)
        return (
            <div className="card">

                <div class="blog__image">
                <img src={blogImage}></img>
                </div>

                <div class="blog__title">
                <h2>{blogTitle}</h2>
                </div>

                <div className="blog__description">
                    {blogText}
                    <button className="btn__readmore">Read More</button>
                </div>
                < LikeCounter />

                {/* <div class="icons clearfix">
                    <div className="heart__icons"> 
                    {/* <i class="fas fa-heart"></i>  */}
                    {/* </div>  
                    <div class="comment__icons"> */}
                    {/* <i class="far fa-comment"></i> */}
                    {/* </div>     */}
                {/* // </div> */} 
        

            </div>
            
        );
    }
 
}
 
export default Blog


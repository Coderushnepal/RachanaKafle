
import React,{Component} from 'react';
import "./Blog.css";
import LikeCounter from '../HOC/LikeCounter';
class Blog extends Component {
    render(){
        const{title,description,image,read_time,published_on}=this.props.info;
        return (
            <div className="card">

                <div class="blog__image">
                <img src={image}></img>
                </div>

                <div class="blog__title">
                <h2>{title}</h2>
                </div>

                <div className="blog__description">
                    {description}
                    <button className="btn__readmore">Read More</button>
                </div>
                < LikeCounter />     
            </div>
            
        );
    }
 
}
 
export default Blog


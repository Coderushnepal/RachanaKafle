
import React,{Component} from 'react';
import "./Blog.css";
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes'
import axios from 'axios'


import LikeCounter from '../HOC/LikeCounter';
class Blog extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isLoading: true,
    //         //array ma data rakhne
    //         blogs: [],
    //     };
    // }
    // scrollPartnerRef = null;

    componentDidMount(blogId) {
        axios.get(`http://localhost:1234/blogs ${blogId}`)
        .then(res=> {
            // console.log(res.data.data);
            const blogs = res.data.data;
            this.setState({ blogs });
        });
    }



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
                    {/* <button className="btn__readmore">Read More</button> */}
                    <Link to={routes.FullBlog} className="btn__readmore">Read More</Link>

                </div>
                < LikeCounter />     
            </div>
            
        );
    }
 
}
 
export default Blog


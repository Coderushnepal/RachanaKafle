import React,{Component, Fragment} from 'react';
import { dummyBlogsData } from '../../../constants/dummyData';


 
class Blog extends Component {
    // constructor(props){
    //     super(props); 
    //     }
 
    render(){
        const{blogTitle,blogText,blogImage}=this.props.info;
        console.log(blogImage)
        return (
            <Fragment>
            <div className="card">
                {/* <div className="card__imgcontainer" 
                // style={{backgroundImage : `url(${blogImage})` }}/>               */}
                <img src={blogImage}></img>
                <h2>{blogTitle}</h2>
                <span className="card__description">
                    {blogText}
                </span>
            </div>
            </Fragment>
        );
    }
 
}
 
export default Blog

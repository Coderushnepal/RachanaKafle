import React,{Component, Fragment} from 'react';


 
class Blog extends Component {
    // constructor(props){
    //     super(props); 
    //     }
 
    render(){
        const{blogTitle,blogText,blogImage}=this.props.info;
        return (
            <Fragment>
            <div className="card">
                <div className="card__imgcontainer" 
                style={{backgroundImage : `url(${blogImage})` }}/>
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

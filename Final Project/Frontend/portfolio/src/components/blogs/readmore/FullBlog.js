import React ,{Component} from 'react';
import {fetchBlogs, fetchBlogsById} from '../../../services/blogServices'


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
        console.log('This is title kaljdfalkjdflkajdfklajslk',title);

        return (
        //    <div className="blog__container" key={`blogs-${blog.id}`}>
        <div className="fullblog__container">             
               <div className="fullblog__title">
                 {title} 
                </div>
                <div class="blog__">
                <span>{publishedOn}</span>
                    <span>{readTime}</span>
                </div>
               <div className="fullblog__image">
                   <img src= {image}></img>
               </div>
                <div className="fullblog__text">
                    {description}
                </div>  
                <div className="commentlike__button">
                <i class="far fa-comments"></i>
                {/* <Link to={routes.COMMENT}><i class="far fa-comments"></i></Link>  */}

                <i class="fas fa-heart"></i>
                </div> 
              
           </div>     
                
        )
    }
}

export default FullBlog
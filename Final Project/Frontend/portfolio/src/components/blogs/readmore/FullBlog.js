import React ,{Component} from 'react';
import {fetchBlogs} from '../../../services/blogServices'


// import * as routes from '../../constants/routes'
// import {Link} from 'react-router-dom';



class FullBlog extends Component {
    constructor(props) {
        console.log(props)
        super(props);
    //     this.state = {
    //         blogDetails: {
    //             title: '',
    //             details: '',
    //             published_on: ''
    //         }
    // //     }
    // }

    // async componentDidMount() {
    //     const blogId = props.match.params.id;

    //     const blogDetails = await fetchBlogsById(blogId);

    //     this.setState({ blogDetails });
    // }


    this.state={
        //data 
        fullblogs:[], 
      };
    }
     
      fetchFullBlogs=async() => {
            console.log("Retriving full  blogs data ")
            const id = this.props.match.params.id;
            console.log(id)
            const data = await fetchBlogs(id);
            console.log(data)
            this.setState({
                fullblogs:data,
            });
      };
       
      componentDidMount() {
        console.log("inside didMount")
        this.fetchFullBlogs();
      } 

  

    render(){
        const{title,description,image,read_time,published_on}=this.state;
        console.log('This is title kaljdfalkjdflkajdfklajslk', this.props.match.params.title);

        return (
            // <div key={`gallery-${img.id}`}></div>
        //    <div className="blog__container" key={`blogs-${blog.id}`}>
        <div className="blog__container">

                <div className="blog__title">
                 {title} 
                </div>
                <div class="blog__">
                <span>{published_on}</span>
                    <span>{read_time}</span>
                </div>
               <div className="blog__image">
                    {image}
               </div>
                <div className="blog__text">
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
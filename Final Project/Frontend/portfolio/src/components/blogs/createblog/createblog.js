import React ,{Component} from 'react';
import "./createblog.css"
import axios from 'axios';
import iziToast from 'izitoast';
import "../../common/toaster.css"






class CreateBlog extends Component {
    constructor(props) {
        super(props)
        this.state ={
            formData :{
                title:"",
                description:""
            }
        }
    }

    fetchData = () => {
        axios({
          method: "POST",
          url: "https://rachana-portfolio-api.herokuapp.com/blogs",
          data: {
            title: this.state.formData.title,
            description: this.state.formData.description,
          },
        })
        .then((res) => {
            console.log(res);
        }).catch((err) => {
        console.log(err);
        });

        
    }
    handleChange = (event) => {
        this.setState({
            formData : {
                ...this.state.formData,
                [event.target.name]:event.target.value
            }
        })
        console.log(this.state.formData)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        iziToast.show({
            message:"Blogs created successfully",
            position: 'topRight',
         })
         this.props.history.push('/blogs');
        
    }

    render(){
        const { title ,description} =this.state.formData
        return (
           <div className="createblog__form">
               <form onSubmit={this.handleSubmit}>
               <label>Title: </label><br></br>
               <input onChange={this.handleChange}type="text" id="blog_title" name="title" placeholder="Enter blog title" value={title} /><br></br>
               {/* <label for="blogimage">upload a image:</label><br></br> */}
                {/* <input type="file" id="blog__image" name="blog__image" /><br></br> */}
               <label>description :</label><br></br>
               <textarea onChange={this.handleChange} id="blog__text"  name="description" placeholder="Enter blog text" value={description}></textarea><br/>
               {/* <label>Read time: </label>
                    <select>
                        {/* <option value="0">Select time:</option> */}
                        {/* <option value="3">3min</option>
                        <option value="4">4 min</option>
                        <option value="5">5 min</option>
                        <option value="6">6 min</option>
                        <option value="7">7 min</option>
                        <option value="8">8 min</option>
                        <option value="9">9 min</option>
                        <option value="10">10 min</option>
                        <option value="11">11 min</option>
                        <option value="12">12 min</option>
                    </select><br></br> */} 
               {/* <label>Published On: </label><br></br> */}
               {/* <input type="text" id="blog__publishedtime" placeholder="Enter published time" /><br></br> */}
               <button onClick={this.fetchData} class="submit__btn" type="submit">submit</button><br></br>
               </form>
           </div>     
                
        )
    }
}

export default CreateBlog
import React ,{Component} from 'react';
import "./createcomment.css"
import iziToast from 'izitoast';
import { postComment } from '../../../../../services/commentServices'
 
 
class Comments extends Component {
        constructor(props){
        super(props);
        this.state={
            formData:{
                commentedBy:"",
                comment:""
            }
        }
    } 

    postComment=async() =>{
        const comments=await postComment(this.state.formData)
        console.log('comments data',comments)
        iziToast.success({
           message:"comment posted" 
        })
    }

    handleChange = (event) => {
        console.log("reached handleChange")
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
        
    }


   render (){
       const{commentedBy,comment}=this.state.formData;
       console.log(this.state.formData)
       return (
                <div className="comment-form">
                 <form onSubmit={this.handleSubmit}>
                    <h2>Leave us a Comment</h2>
                    <div className="username-section">
                        <label>Name: </label>
                        <input onChange={this.handleChange} type="text" name="commentedBy" placeholder="Enter your name" value={commentedBy}/>
                    </div> 
                        <div className="comment-box">
                        <label>Comment: </label>
                    <input onChange={this.handleChange}  id="comment" name="comment" placeholder="Enter your comment"  required value={comment}/><br/> 
                {/* <textarea htmlFor="comment"  id="comment" name="comment" placeholder="Enter your comment" required></textarea><br/>  */}
                    </div>                  
                    <div className="btn__submit">
                         <button onClick={this.postComment}type="submit">Post</button>
                    </div>
                    </form>
                </div>
       )
   }
 
}   
export default Comments


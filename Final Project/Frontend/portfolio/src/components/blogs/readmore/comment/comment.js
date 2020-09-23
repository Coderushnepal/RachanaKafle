// import React ,{Component} from 'react';
// import "./comment.css"
// import axios from 'axios';
// import iziToast from 'izitoast';






// class Comments extends Component {
//     constructor(props) {
//         super(props)
//         this.state ={
//             formData :{
//                 title:"",
//                 description:""
//             }
//         }
//     }

//     fetchData = () => {
//         axios({
//           method: "POST",
//           url: "http://localhost:8848/blogs",
//           data: {
//             title: this.state.formData.title,
//             description: this.state.formData.description,
//           },
//         })
//         .then((res) => {
//             console.log(res);
//         }).catch((err) => {
//         console.log(err);
//         });

        
//     }
//     handleChange = (event) => {
//         this.setState({
//             formData : {
//                 ...this.state.formData,
//                 [event.target.name]:event.target.value
//             }
//         })
//         console.log(this.state.formData)
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         iziToast.show({
//             message:"Blogs created successfully"
//          })
        
//     }

//     render(){
//         const { title ,description} =this.state.formData
//         return (
//            <div className="createblog__form">
//                <form onSubmit={this.handleSubmit}>
//                <label>Title: </label><br></br>
//                <input onChange={this.handleChange}type="text" id="blog_title" name="title" placeholder="Enter blog title" value={title} /><br></br>
//                {/* <label for="blogimage">upload a image:</label><br></br> */}
//                 {/* <input type="file" id="blog__image" name="blog__image" /><br></br> */}
//                <label>description :</label><br></br>
//                <textarea onChange={this.handleChange} id="blog__text"  name="description" placeholder="Enter blog text"></textarea><br/>
//                <button onClick={this.fetchData} class="submit__btn" type="submit">Post</button><br></br>
//                </form>
//            </div>     
                
//         )
//     }
// }



// class Comments extends Component {
//     render (){
//         return (
//             <div>
//             <label>Commented_by </label>
//             <input type="text" />
//             <label>Comment </label>
//             <input type="text" />
//             </div>

//         )
//     }

// }    
// export default Comments
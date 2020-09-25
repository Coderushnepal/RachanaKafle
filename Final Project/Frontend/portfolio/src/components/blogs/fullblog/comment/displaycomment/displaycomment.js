import React ,{Component} from 'react'

import {fetchComments} from '../../../../../services/commentServices'
class CommentsDisplay extends Component {
    constructor(props){
        super(props)
 
        this.state ={
         comments:[]
        // comments:{
        //     commentedBy:"",
        //     comment:"",

        // },
    }
}    

    fetchComments=async() =>{
        const data=await fetchComments();
        this.setState ({
            comments:data,
        });
    };

    componentDidMount() {
        console.log("inside comment didmount")
        this.fetchComments();
    } 
   
    render (){
        const token= localStorage.getItem('Token');

        const {commented_by,comment}=this.state
        // const{commentedBy,comment}=this.state.comments;

        console.log("comment data" ,this.state.comment)
        return (
            <div className="comment-section">
            {/* <div>Commented By:{commented_by}</div>   */}
            {/* <div>Comment :{comment}</div> */}
             <div><span style={{color:"#9d4931"}}>Commented By:</span> Kritika Baral</div>
            <div>
                <span style={{color:"#9d4931"}}>Comment :</span> worth reading!!
            {   token?
                    <button className="btn__delete" style={{margin:"0px 100px"}}>
                        <i class="far fa-trash-alt"></i>
                            </button>
                                :null
                                } 
            </div> 
            <hr></hr>
    
            {/* <div>Commented By:{commented_by}</div>   */}
            {/* <div>Comment :{comment}</div> */}
             <div><span style={{color:"#9d4931"}}>Commented By:</span> Anonymous</div>
            <div><span style={{color:"#9d4931"}}>Comment :</span> nice!!
            
            {   token?
                    <button className="btn__delete" style={{margin:"0px 100px"}}>
                        <i class="far fa-trash-alt"></i>
                            </button>
                                :null
                                }       
            </div> 
            <hr></hr>
            </div>
        )
    }

}    
export default CommentsDisplay
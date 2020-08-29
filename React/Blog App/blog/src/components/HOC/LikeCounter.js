import React, {Component} from 'react'
import withCount from './WithCount'; 
import Counter from '../common/TotalLikeCounter'

class LikeCounter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <span onClick={ this.props.add }
                 style={{
                    float:"left",
                    fontSize:"30px",
                    color:"red"
              }}>
                <i class="fas fa-heart"> {this.props.count}</i>
               
                </span>
            </div>
        );
    }
}
export default withCount(LikeCounter)
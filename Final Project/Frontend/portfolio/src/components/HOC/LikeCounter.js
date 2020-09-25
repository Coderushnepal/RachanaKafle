import React, {Component} from 'react'
import withCount from './WithCount'; 


class LikeCounter extends Component {

    render(){
        return (
            <div>
                <span onClick={ this.props.add }
                 style={{
                    float:"left",
                    fontSize:"30px",
                    color:"#358173"
              }}>
                <i class="fas fa-heart"> {this.props.count}</i>
               
                </span>
            </div>
        );
    }
}
export default withCount(LikeCounter)
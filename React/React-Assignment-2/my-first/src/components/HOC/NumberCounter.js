import React, {component, Component} from 'react'
import withCount from './WithCount';

class NumberCounter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <button  class="btn btn-add" onClick={ this.props.add }>
                    <span>+</span>
                </button>
                <button class="btn btn-subtract" onClick={ this.props.subtract }>
                    <span>-</span>
                </button>
                <h2>{ this.props.count }</h2>
            </div>
        );
    }
}
export default withCount(NumberCounter)

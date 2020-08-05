import React, {component, Component} from 'react'
import './MathOperation.css';

class Addsubtract extends Component {

    constructor(props){
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }
    Add=()=> {
        this.setState({clicks:this.state.clicks+1})
    }
    Subtract=()=> {
        this.setState({clicks:this.state.clicks-1})
    }

    render(){
        return (
            <div>
                <button  class="btn btn-add" onClick={this.Add}>
                    <span>+</span>
                </button>
                <button class="btn btn-subtract" onClick={this.Subtract}>
                    <span>-</span>
                </button>
                <h2>{ this.state.clicks }</h2>
            </div>
        );
    }

}

export default Addsubtract
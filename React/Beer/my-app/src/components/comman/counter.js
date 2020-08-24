import React from 'react';
import { bindActionCreators } from 'redux';
import {counterActions} from "../../actions";
import { connect } from 'react-redux';
import { decreaseCount } from '../../actions/counterActions';
const Counter = ({count,actions}) => (
    <div>
        <h1>Counter</h1>
        <button 
        style={{
            position:"relative",
            clear:"both",
            padding:"10px",
            margin:"20px",
        }}
        onClick={actions.increaseCount}    
        >
        +</button>
        <button
        style={{
            position:"relative",
            clear:"both",
            padding:"10px",
            margin:"10px",
        }}
        onClick= {actions.decreaseCount}     
        >
        -</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        count:state.counterReducer.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators({...counterActions},dispatch),
    };
}; 

export default connect(mapStateToProps,mapDispatchToProps) (Counter);
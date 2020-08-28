import React from 'react';
import { bindActionCreators } from 'redux';
import {counterActions} from "../../actions";
import { connect } from 'react-redux';
const Counter = ({count,actions}) => (
    <div>
        <span
        style={{
            float:"left",
            fontSize: "25px",
            color:"red",
        }}
         onClick={actions.increaseCount}    
        >
         <i class="fas fa-heart"></i> {count}</span>
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
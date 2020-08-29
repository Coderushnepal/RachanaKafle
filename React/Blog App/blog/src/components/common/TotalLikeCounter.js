import React from 'react';
import { bindActionCreators } from 'redux';
import {counterActions} from "../../actions";
import { connect } from 'react-redux';
const Counter = ({count,actions}) => (
    <div>
         <span
        onClick={actions.increaseCount}   
       >
        {/* <i class="fas fa-heart"></i> {count}</span> */}
      
        Total Liked{count}</span>
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
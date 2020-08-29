import {TOTAL_COUNTER} from "../constants/actions"

const initialState ={
    count:0,
    // name:"counter"
}

const counterReducer =(state=initialState,action) => {
switch (action.type){
    case TOTAL_COUNTER:
        return {
            ...state ,
             count:state.count+1,
        }
    default:
        return state;      
}   
};

export default counterReducer
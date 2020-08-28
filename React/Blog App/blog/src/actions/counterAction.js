import { COUNTER_INCREMENT, COUNTER_DECREMENT} from '../constants/actions';

export const increaseCount = () => {
    return {
        type:COUNTER_INCREMENT
    };
};

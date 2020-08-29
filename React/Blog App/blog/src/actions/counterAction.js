import { TOTAL_COUNTER} from '../constants/actions';

export const increaseCount = () => {
    return {
        type:TOTAL_COUNTER
    };
};

import { add, minus } from 'pd-rush-utils';

const addCalculator = (a, b) => {
    return add(a, b);
};
const minusCaculator = (a, b) => {
    return minus(a, b);
};

export { addCalculator as default, minusCaculator };

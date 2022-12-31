import { add, minus } from 'pd-rush-utils';

const addCalculator = (a: number, b: number) => {
    return add(a, b)
}

export const minusCaculator = (a: number, b: number) => {
    return minus(a, b)
}

export default addCalculator
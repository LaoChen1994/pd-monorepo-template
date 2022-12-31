function add(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}

const addCalculator = (a, b) => {
    return add(a, b);
};
const minusCaculator = (a, b) => {
    return minus(a, b);
};

export { addCalculator as default, minusCaculator };

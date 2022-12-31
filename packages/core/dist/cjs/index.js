'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pdRushUtils = require('pd-rush-utils');

const addCalculator = (a, b) => {
    return pdRushUtils.add(a, b);
};
const minusCaculator = (a, b) => {
    return pdRushUtils.minus(a, b);
};

exports.default = addCalculator;
exports.minusCaculator = minusCaculator;

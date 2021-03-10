module.exports = function reverse(n) {
    let nStr = String(Math.abs(n));
    return +nStr.split('').reverse().join('');
};

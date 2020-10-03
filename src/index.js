module.exports = function reverse(n) {
    n = Math.abs(n).toFixed(0).split('').reverse().join('') - 0;
    return n;
}

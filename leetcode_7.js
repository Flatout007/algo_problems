/*
    // 7. Reverse Integer
    Given a signed 32-bit integer x, return x with its digits reversed. 
    If reversing x causes the value to go outside the 
    signed 32-bit integer range [-231, 231 - 1], then return 0.

    // ex: input:(-123) output => -321;
*/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let under = Math.pow(-2, 31);
    let over = (Math.pow(2, 31)) - 1;
    
    if(my_reverse(x) < under) return 0;
    if(my_reverse(x) > over) return 0;
    
    return my_reverse(x);
};

const my_reverse = (x) => {
   let s;
    if(x < 0) {
        s = x.toString().split('').slice(1).reverse();
        s.unshift('-');
        return parseFloat(s.join(''))
    } else {
        s = parseFloat(x.toString().split('').reverse().join(''));
        return s;
    }
}
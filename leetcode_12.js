/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  /**
    @algorithm {
     1.IDENTIFY max place value of num in order to get correct roman numeral;
     
     2.REDUCE num by roman place value & accumulate roman string until num is 0;
    }
    */

  const nums = num.toString();

  let len = nums.length,
    str = "",
    n = nums;

  let i = 0;
  while (len !== 0 && n !== 0) {
    let digit = parseFloat(nums[i]);

    switch (len) {
      case 4:
        n = n - digit * 1000;
        str += "M".repeat(digit);
        break;
      case 3:
        n = n - digit * 100;
        if (digit === 4) {
          str += "CD";
        } else if (digit === 9) {
          str += "CM";
        } else {
          if (digit > 5) {
            str += "D";
            let tmp = digit - 5;
            str += "C".repeat(tmp);
          } else if (digit === 5) {
            str += "D";
          } else str += "C".repeat(digit);
        }
        break;
      case 2:
        n = n - digit * 10;
        if (digit === 4) {
          str += "XL";
        } else if (digit === 9) {
          str += "XC";
        } else {
          if (digit > 5) {
            str += "L";
            let tmp = digit - 5;
            str += "X".repeat(tmp);
          } else if (digit === 5) {
            str += "L";
          } else str += "X".repeat(digit);
        }
        break;
      case 1:
        n = n - digit * 1;
        if (digit === 4) {
          str += "IV";
        } else if (digit === 9) {
          str += "IX";
        } else {
          if (digit > 5) {
            str += "V";
            let tmp = digit - 5;
            str += "I".repeat(tmp);
          } else if (digit === 5) {
            str += "V";
          } else str += "I".repeat(digit);
        }
        break;
      default:
        continue;
    }
    i++;
    len--;
  }

  return str;
};

// 13. Roman to Integer

/*
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/


var romanToInt = function(s) {

    // look for subtarction patterns, add them
    // remove subtraction patterns. add those.
    // add both as an aggregate.
        
        
        
    let romanSymbols = {
    'I':   1,
    'V':   5,
    'X':   10,
    'L':   50,
    'C':   100,
    'D':   500,
    'M':   1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
    }
    
    let subSum = 0;
    let remainder = '';
    
        
    for(let i = 0; i<s.length; i++) {
        if(romanSymbols[s[i] + s[i+1]]) {
            subSum += romanSymbols[s[i] + s[i+1]];
            s[i] = ''; 
            s[i+1] = '';
        }

        remainder += s[i];
    }
    

    return subSum + romanSymbols[remainder];
    
    
    
    
    
    
    // "MCMXCIV"
    // 1994
    
    // M
    
    
    // iv = 4, cm = 900, xc = 90  = 994
    
    // m = 1000

    
}    
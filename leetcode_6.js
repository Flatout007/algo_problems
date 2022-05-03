/**
 * 
@description @namespace {
 6. Zigzag Conversion[Medium]

    The string "PAYPALISHIRING" is written in a zigzag pattern on 
    a given number of rows like this: (you may want to display this 
    pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a 
    number of rows:

    - string convert(string s, int numRows);
}

@example {
    Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"
}
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let mat = new Array(numRows), k = 0;
    for(let i = 0; i<mat.length; i++)
        mat[i] = [];
    
    while(k<s.length) {
        for(let i = 0; i<mat.length; i++) {
            if(k > s.length) break;
            mat[i].push(s[k++])
        }
        for(let i = mat.length-2; i>=1; i--) {
            if(k > s.length) break;
            mat[i].push(s[k++]);
        }
    }
    
    return mat.flat().join('');
};

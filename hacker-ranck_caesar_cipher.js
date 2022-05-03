/**
@description @namespace { 
    Julius Caesar protected his confidential information by 
encrypting it using a cipher. Caesar's cipher shifts each letter
by a number of letters. If the shift takes you past the end of 
the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

}

@example {
    The alphabet is rotated by , matching the mapping above. 
    The encrypted string is .

    Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.
    Function Description
    Complete the caesarCipher function in the editor below.
    caesarCipher has the following parameter(s):
    string s: cleartext
    int k: the alphabet rotation factor
    Returns
    string: the encrypted string
    Input Format
    The first line contains the integer, , the length of the unencrypted string.
    The second line contains the unencrypted string, .
    The third line contains , the number of letters to rotate the alphabet by.
    Sample Input
    11
    middle-Outz
    2
}
*/
function caesarCipher(s, k) {
    // Write your code here
    k = k % 26;
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newS = "";
    
   for(let i in s) {
        if(alpha.includes(s[i])) newS += alpha[alpha.indexOf(s[i]) + k];
        else newS += s[i]; 
    } 

    return newS.join('')
}

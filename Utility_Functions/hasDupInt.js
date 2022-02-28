// checks an integer for duplicate value and returns true or false
function hasDupInt(input) {
    let seen = new Array(10), n = input; // part 1
    seen.fill(0);
    
    while(n > 0) {    // part 2
        let rem = n % 10; // get last digit of input
        if(seen[rem] === 1) break;
        seen[rem] = 1;
        n = parseInt(n / 10); // move loop forward by removing last digit
    }
    // if loop finish early, dup val has been seen, n will be > 0, 
    // therefore return true else false
    if(n > 0) return true; // part 3
    else return false;
}

dupNum(1123);
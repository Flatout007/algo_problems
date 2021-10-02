function hourglassSum(arr) {
    let maxSum = -Infinity;
    let hourGlassSum = 0;
    // Write your code here
    for(let i = 0; i<arr.length - 2; i++) {
        for(let j = 0; j<arr.length - 2; j++) {
            hourGlassSum = ( 
            (arr[i][j] + arr[i][j+1] + arr[i][j+2]) + 
                         arr[i+1][j+1] + 
            (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])
            );
            maxSum = Math.max(maxSum, hourGlassSum);      
        }
    }
    
    return maxSum;
}
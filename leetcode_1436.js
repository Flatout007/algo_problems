/**
 * 1436. Destination City[Easy]

You are given the array paths, where paths[i] = [cityAi, cityBi] means there 

exists a direct path going from cityAi to cityBi. Return the destination city,

that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop,

therefore, there will be exactly one destination city.

Example 1:
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city 
which is the destination city. 
Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
 */
/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    for(let i = 0; i<paths.length; i++) {
        let tmp = 0;
        for(let j = 0; j<paths.length; ) {
            // if a path[i] is not a destination[i]
            if(paths[i][1] !== paths[j++][0]) {
               tmp += 1;
            }
            if(tmp >= paths.length) return paths[i][1];
        }
    }
 };
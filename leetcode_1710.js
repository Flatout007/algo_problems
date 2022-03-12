/**
 * 1710. Maximum Units on a Truck[Easy]

You are assigned to put some amount of boxes onto one truck. 

You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

-numberOfBoxesi is the number of boxes of type i.
-numberOfUnitsPerBoxi is the number of units in each box of the type i.
-You are also given an integer truckSize, which is the maximum number of boxes that can be 
put on the truck. You can choose any boxes to put on the truck as long as the number of boxes 
does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.

Example 1:

Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
 */
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
     // 1. sort boxTypes in desc order by units to maximize sum. 
    //      go through each boxTypes, 
    //  2. unloading packages from each truck
   //   3. until total packages unloaded equals truckSize
   //    if it does, stop unloading and get the maximun units
   //* maxUnits = (p1 * u1) + (p2 * u2)...... p = trucks[i], u = boxTypes[1]
     // TIME:  O(n + j), n->truckSize, j->times while loop is executed
     // SPACE: O(t), t->truckSize
     let count = 0, trucks = [], sum = 0;
     boxTypes = boxTypes.sort((a,b) => b[1] - a[1]);
     for(let i = 0; i<boxTypes.length; i++) {
         let [pack, unit] = boxTypes[i];
         if(count + pack < truckSize) {
             count += pack;
             trucks.push(pack);
         }
         else {
             let last = 0;
             while(count < truckSize && pack > 0) {
                 pack--;
                 last += 1;
                 count += 1;
             }
             trucks.push(last);
             break;
         }
     }
     for(let i = 0; i<trucks.length; i++) {
         let [pack, unit] = boxTypes[i];
         sum += trucks[i] * unit;
     }
     
     return sum;
 };
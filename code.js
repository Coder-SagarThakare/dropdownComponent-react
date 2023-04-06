const arr = [1, 1, 3, 1, 2];
console.log(arr.filter((ele, index, arr) => arr.indexOf(ele) != index));        // ele = 3   // index = 2
                                                //  0    !=  3            
// this code return duplicate element from array
//     
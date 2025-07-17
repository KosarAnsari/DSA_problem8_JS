// checking square in another array
// arr1 = [1,2,4,2] arr2 = [1,4,4,16]

// map1 ={1:1,2:2,4:1}
//map2 = {1:1,4:2,16:1}

function isSquareCheck(array1, array2) {
    let map1 = {};
    let map2 = {};

    for (let items of array1) {
        map1[items] = (map1[items] || 0) + 1;

    }
    console.log(map1);
    for (let items1 of array2) {
        map2[items1] = (map2[items1] || 0) + 1;

    } console.log(map2);
    for (let key in map1) {
        console.log(key);
        if (!map2[key * key]) {  // object keys are compared in terms of square
            return false;
        } if (map1[key] !== map2[key * key]) { // value compare
            return false;
        }
    }
    return true;

}

let res = isSquareCheck([1, 2, 2, 4], [1, 16, 4, 4]);
console.log(res);
// Linear time complexity O(n)
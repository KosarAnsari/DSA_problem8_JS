💡Day 8 – 21 Day DSA Challenge

Topic: Checking if one array contains the squares of elements of another array (with same frequency)


---

Problem Statement

Given two arrays, determine if the second array contains the squares of elements in the first array, with the same frequency.

Example:

Input: arr1 = [1, 2, 4, 2], arr2 = [1, 4, 4, 16]
Output: true


---

Approach

Use Frequency Counter Pattern for efficient comparison.

Create two frequency maps:

map1 for elements in the first array.

map2 for elements in the second array.


Validate that:

1. Each key in map1 has its square in map2.


2. Frequencies match.





---

Time Complexity

✅ O(n) – Because we loop through both arrays once and then compare keys.

Space Complexity

✅ O(n) – For storing frequency maps.


---

Solution Code (JavaScript)

function isSquareCheck(array1, array2) {
  let map1 = {}, map2 = {};

  for (let item of array1) {
    map1[item] = (map1[item] || 0) + 1;
  }

  for (let item of array2) {
    map2[item] = (map2[item] || 0) + 1;
  }

  for (let key in map1) {
    if (!map2[key * key]) return false;
    if (map1[key] !== map2[key * key]) return false;
  }
  
  return true;
}

let res = isSquareCheck([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(res); // Output: true


---

Key Learnings

Improved the brute force approach from O(n²) to O(n) using hashing.

Understood frequency counter pattern for array comparisons.

Reinforced concepts of space-time tradeoff.



---

✅ Next Step:

Move to Day 9: Recursion Problems 🚀



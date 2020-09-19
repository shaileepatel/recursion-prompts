/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if(n < 0) return null;
  if(n === 0) return 1;
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var result = 0;
  function helper(arr){
    if(arr.length === 0) return;
    result+=arr[0];
    helper(arr.slice(1));
  }
  helper(array);
  return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var result = 0;
  function helper(arr){
    if(arr.length === 0) return;
    if(typeof arr[0] === 'number'){
      result+=arr[0];
    } else {
      helper(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(array);
  return result;
};

// 4. Check if a number is even.
var isEven = function(n) {
  return (n % 2 === 0);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n < 0) {
    return n+1 + sumBelow(n+1);
  }
  if(n === 0) return 0;
  return n-1 + sumBelow(n-1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];
  function helper(num1,num2){
    if(num1 === undefined || num2 === undefined) return;
    if(num1 === num2) return;
    if(num1 > num2){
      if(num1-1 === num2) return;
      result.push(num1-1);
      helper(num1-1,num2);
    } else {
      if(num1+1 === num2) return;
      result.push(num1+1);
      helper(num1+1,num2);
    }
  }
  helper(x,y);
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0) return 1;
  if(exp === 1) return base;
  return base * exponent(base, exp-1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  string = string.split("");
  var result = [];
  function helper(str){
    if(str.length === 0) return;
    result.push(str.pop());
    helper(str);
  }
  helper(string);
  return result.join("");
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if(string.length === 0) return true;
  if(string[0] !== string[string.length - 1]) return false;
  return palindrome(string.slice(1,string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if(x === 0 || y === 0) return 0;
  if(x === 1) return y;
  if(y === 1) return x;
  if(x > 0 && y > 0){
    return x + multiply(x,y - 1);
  } else if(x < 0 && y > 0) {
    return x + multiply(x,y - 1);
  } else if(x > 0 && y < 0) {
    return y + multiply(x-1, y);
  } else if(x < 0 && y < 0){
    return -x + multiply(-x, (-y)-1);
  }
 };

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(num1, num2) {
  function helper(x,y){
    if(y === 0) return NaN;
    if(x === 0) return 0;
    if(y === 1) return x;
    if(x < y){
      return 0;
    }
    if(x > y){
      return 1 + helper(x-y,y)
    }
  }
  var a = num1;
  var b = num2;
  if(a < 0){
    a = -a;
  }
  if(b < 0){
    b = -b;
  }
  var result = helper(a,b);
  if(num1 < 0 || num2 < 0){
    return -result;
  }
  return result;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1.length === 0 && str2.length === 0) return true;
  if(str1[0] !== str2[0]) return false;
  return compareStr(str1.slice(1),str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(string) {
  var result = [];
  function helper(str){
    if(str.length === 0) return;
    result.push(str[0]);
    helper(str.slice(1));
  }
  helper(string);
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var result = [];
  function helper(arr){
    if(arr.length === 0) return;
    result.push(arr.pop());
    return helper(arr);
  }
  helper(array);
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [];
  function helper(num,len){
    if(len === 0) return;
    result.push(num);
    helper(num,len-1);
  }
  helper(value,length);
  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(num) {
  var result = [];
  function helper(n){
    if(n === 0) return;
    if(n % 3 === 0 && n % 5 === 0){
      result.push('FizzBuzz');
    } else if(n % 5 === 0){
      result.push('Buzz');
    } else if(n % 3 === 0){
      result.push('Fizz')
    } else{
      result.push('' + n);
    }
    helper(n-1);
  }
  helper(num);
  return result.reverse();
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(array.length === 0) return 0;
  if(array[0] === value){
    return 1 + countOccurrence(array.slice(1), value);
  }
  return countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var result = [];
  function helper(arr,callback){
    if(arr.length === 0) return;
    result.push(callback(arr[0]));
    helper(arr.slice(1),callback);
  }
  helper(array,callback);
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(object, mainKey) {
  var count = 0;
  function helper(obj,mainKey){
    for(var key in obj){
      if(key === mainKey){
        count++;
      }
      if(typeof obj[key] === 'object' && !(Array.isArray(obj[key]))){
        helper(obj[key],mainKey);
      }
    }
  }
  helper(object,mainKey);
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(object, value) {
  var count = 0;
  function helper(obj,val){
    for(var key in obj){
      if(obj[key] === val){
        count++;
      }
      if(typeof obj[key] === 'object' && !(Array.isArray(obj[key]))){
        helper(obj[key],val);
      }
    }
  }
  helper(object,value);
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(object, oldKey, newKey) {
  function helper(obj){
    for(var key in obj){
      if(key === oldKey){
        obj[newKey] = obj[key];
        delete obj[key];
        key = newKey;
      }
      if(typeof obj[key] === 'object' && !(Array.isArray(obj[key]))){
        helper(obj[key]);
      }
    }
  }
  helper(object);
  return object;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  return result = [];
  function helper(num){
    if(n <= 2) return 1;
    result.push(fibonacci(n-1) + fibonacci(n-2))
  }
  helper(n);
  return result.reverse();
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  function helper(arr){
    if(arr.length === 0) return;
    var str = arr[0];
    str = str.toUpperCase();
    result.push(str);
    helper(arr.slice(1));
  }
  helper(array);
  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var result = [];
  function helper(arr){
    if(arr.length === 0) return;
    var str = arr[0];
    var first = str[0].toUpperCase();
    str = str.slice(1);
    str = first+str;
    result.push(str);
    helper(arr.slice(1));
  }
  helper(array);
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(object) {
  var result = 0;
  function helper(obj){
    for(var key in obj){
      if(typeof obj[key] === 'number'){
        if(obj[key] % 2 === 0){
          result+=obj[key];
        }
      }
      if(typeof obj[key] === 'object'){
        helper(obj[key])
      }
    }
  }
  helper(object);
  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  function helper(arr){
    if(arr.length === 0) return;
    if(typeof arr[0] === 'number'){
      result.push(arr[0]);
    } else if(Array.isArray(arr[0])){
      helper(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(array);
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(string) {
  var result = {};
  function helper(str){
    if(str.length === 0) return;
    if(result[str[0]]){
      result[str[0]]++;
    } else {
      result[str[0]] = 1;
    }
    helper(str.slice(1));
  }
  helper(string);
  return result;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var result = [];
  function helper(arr){
    if(arr.length === 0) return;
    if(arr[0] !== result[result.length - 1]){
      result.push(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(list);
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];
  function helper(arr,num){
    console.log(arr);
    if(arr.length === 0) return;
    if(Array.isArray(arr[0])){
      var tempArr = arr[0];
      tempArr.push(num);
      result.push(tempArr);
    }
    helper(arr.slice(1),num);
  }
  helper(array,aug);
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];
  function helper(arr){
    if(arr.length === 0) return;
    if(arr[0] !== result[result.length - 1]){
      result.push(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(array);
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  function helper(arr){
    if(arr.length === 0) return;
    if(result[result.length - 1] > 0){
      result.push(-(Math.abs(arr[0])));
    } else {
      result.push(Math.abs(arr[0]));;
    }
    helper(arr.slice(1));
  }
  helper(array);
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(string) {
  var result = [];
  var obj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  function helper(str){
    if(str.length === 0) return;
    if(str[0] in obj){
      result.push(obj[str[0]]);
    } else{
      result.push(str[0]);
    }
    helper(str.slice(1));
  }
  helper(string);
  return result.join("");
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};

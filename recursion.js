/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  let wordlen = longest(words.slice(1));

  return Math.max(words[0].length, wordlen);

}

/** everyOther: return a string with every other letter. */

function everyOther(str, out = "", i = 0) {
  if (str.length === i) return out;

  if (i % 2 === 0) out += str[i];

  return everyOther(str, out, i + 1);
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val, i = 0) {

  if (arr.length === i) return false;

  if (arr[i] === val) return true;

  return find(arr, val, i + 1)


}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (str.length / 2 < i) return true;

  if (str[i] === str[str.length - 1 - i]) return isPalindrome(str, i + 1);

  return false;


}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  if (str[0] === undefined) return "";

  return revString(str.slice(1)) + str[0]

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return -1;

  if (arr[i] === val) return i;

  return findIndex(arr, val, i + 1)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = []) {


  //if key has value that is string, push to array
  for (let key in obj) {
    if (typeof (obj[key]) === "string") {
      out.push(obj[key]);
    } else if (typeof (obj[key]) === "object") {
      out = gatherStrings(obj[key], out)
    }
  }

  return out;

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  //split arr.length by half,

  if(arr.length === 0) return false;

  if(arr.length === 1){
    if(arr[0] === val) {
      return true;
    }else return false;

  }

  if(arr[arr.length/2] > val){
    return binarySearch(arr.slice(0,arr.length/2), val)
  }else{
    return binarySearch(arr.slice((arr.length/2), arr.length), val)
  }

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, i = arr.length/2) {
  if(arr.length === 0) return -1;

  if(arr.length === 1){
    if(arr[0] === val) {
      return i;
    }else return -1;
  }

  if(arr[arr.length/2] > val){
    i -= ((arr.length -1 )/2);
    return binarySearchIndex(arr.slice(0,(arr.length)/2), val, i)
  }else{
    i += ((arr.length - 1)/2);
    return binarySearchIndex(arr.slice((arr.length/2), arr.length), val, i)
  }
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};

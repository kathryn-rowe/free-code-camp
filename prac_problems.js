var oldArray = [1, 2, 3];

for (var i = 0; i < oldArray.length; i++){
    oldArray[i] *= 2;
}

console.log(oldArray);
console.log("****");

var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]


// FILTER****************

var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(val) {
  return val < 6;
});

console.log("****");
console.log(oldArray);
console.log(newArray);

// REDUCE***************

var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.reduce(function(previousVal, currentVal) {
    return previousVal + currentVal;
}, 0);

console.log("****");
console.log(oldArray);
console.log(newArray);


// SORT******************

var array = [1, 12, 21, 2];

array.sort(function(a, b) {
  return b-a; // sort largest to smallest
});

console.log("****");
console.log(array);

// REVERSE*******************
console.log("****");
var array = [1, 12, 21, 2];
console.log(array);

// array.reverse();

var newArray = array.reverse();
console.log(newArray);

// REVERSE STRING******************

function reverseString(str) {
  var newStr = "";
  var strLen = str.length - 1;
  for (var i = strLen; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

reverseString("hello");

// PALINDROME***************

// str = "race Car";
// var newStr = str.toLowerCase().replace(" ", "");
// console.log(newStr);

function palindrome(str) {
  var newStr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
  
  console.log("++++++++");
  console.log(newStr);
  console.log("++++++++");
  var revStr = "";
  var strLen = newStr.length - 1;
  for (var i = strLen; i >= 0; i--){
    revStr += newStr[i];
  }

  if (revStr == newStr){
    return true;
  }
  return false;
}

console.log("****");
var answer = palindrome("race-/ Car");
console.log(answer);

// FIND LONGEST WORD *********************

function findLongestWord(str) {

  var words = str.split(" ");

  var wordCount = {};

  for (var i = 0; i < words.length; i ++){
    wordCount[words[i]] = words[i].length;
  }

  var longest = 0;
  for (var j in wordCount){
    if (wordCount[j] > longest) {
        longest = wordCount[j];
    }
  }
  console.log("++++++++");
  console.log(longest);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
console.log("------------------------");

// REPLACE FIRST LETTER WITH CAPITAL************


function titleCase(str) {
  var newStr = str.split(" ");

  var finalStr = "";
  
  for (var word in newStr) {
    var length = (newStr[word]).length;
    var first = newStr[word][0].toUpperCase();
    if (length > 1){
      var last = newStr[word].slice(-(length - 1));
      finalStr = finalStr + " " + first + last.toLowerCase();
    } else {
      finalStr += " " + first;
    }
    // word[0] = first;
    // finalStr += word;
  }
  console.log(finalStr.trim());

}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

console.log("------------------------");
// LARGEST NUMBER IN SUB-ARRAYS**********************
function largestOfFour(arr) {
  
  var largeSubs = {};
  var highValue;

  for (var i = 0; i < arr.length; i ++){
    highValue = 0;
    
    for (var j = 0; j < arr[i].length; j ++){
      if (arr[i][j] > highValue) {
        highValue = arr[i][j];
      }
    }largeSubs[highValue] = arr[i];
  }

  var highKey = [];
  highValue = 0;

  for (var x in largeSubs){
    var z = parseInt(x, 10);
    var b = parseInt(highValue, 10);
    if (z > b) {
        highValue = z;

        if (highKey.length > 0) {highKey.pop();}

        highKey.push(largeSubs[x]);
    }
  }
  console.log(highKey);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log("------------------------");
// LARGEST NUMBER from each SUB-ARRAYS**********************

function largestOfFour(arr) {
  
  var largeSubs = [];
  var highValue;

  for (var i = 0; i < arr.length; i ++){
    highValue = 0;
    
    for (var j = 0; j < arr[i].length; j ++){
      if (arr[i][j] > highValue) {
        highValue = arr[i][j];
      }
    } largeSubs.push(highValue);
  }
  console.log(largeSubs);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log("------------------------");

// LAST LETTER equals target**********************
function confirmEnding(str, target) {
  var checkStr = "";
  var targetStr = "";
  var strNospace = str.replace(/\s+/g, '');
  // console.log(strNospace);
  var targetNospace = target.replace(/\s+/g, '');

  var strLen = strNospace.length - targetNospace.length;
  // console.log(strLen);
  
  for (var i = strNospace.length-1; i >= strLen; i --){
    checkStr += strNospace[i];
    
  }console.log(checkStr);
  
  for (var j = targetNospace.length-1; j >= 0; j --){
    targetStr += targetNospace[j];

  }console.log(targetStr);
  
  if (checkStr == targetStr){
    console.log(true);
  } else {
    console.log(false);
  }
    // console.log(target[i]);
}

confirmEnding("Walking on water and developing software from a specification are easy if bospecification", "specification");

// REPEAT A STRING so many times**************************
console.log("------------------------");

function repeatStringNumTimes(str, num) {
  var newStr = "";

  if (num > 0){
    while (num > 0){
      newStr += str;
      num -= 1;
    }
  } console.log(newStr);
}

repeatStringNumTimes("*", 8);

// TRUNCATE A STRING**********************************
console.log("------------------------");

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncateStr = "";
  var dots = "";
  

  if (str.length == 2 || num == 2) {
    dots = "...";
    // num += num;
  } else if (num < str.length) {
    num -= 3;
    dots = "...";
  }
  
  for (var i = 0; i <= num-1; i ++){
    if (str[i] !== undefined) {
      truncateStr += str[i];
    }
  }
  var shortStr = truncateStr.concat(dots);
  console.log(shortStr);
}
truncateString("A-", 1);

// SPLIT INTO MULTI ARRAY*****************************
console.log("------------------------");

function chunkArrayInGroups(arr, size) {
  var allArrays = [];
  var collectionArray = [];

  for (var i = 0; i < arr.length; i ++) {
    collectionArray.push(arr[i]);
    if (collectionArray.length == size){
      allArrays.push(collectionArray);
      collectionArray = [];
    }
  } if (collectionArray.length > 0){
    allArrays.push(collectionArray);
  }
  console.log(allArrays);
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// SLASHER**********************************************
console.log("------------------------");

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  for (var i = 0; i < howMany; i ++){
      arr.shift();
  } console.log(arr);
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);

// SLASHER WITH SPLICE.()******************************
console.log("------------------------");

function slasher2(arr2, howMany2) {
  // it doesn't always pay to be first
  arr2.splice(0, howMany2);
  console.log(arr2);
  console.log("second");
}

slasher2([1, 2, "chicken", 3, "potatoes", "cheese", 4], 2);

// MUTATION****************************************
console.log("------------------------");
function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();

  for (var i = 0; i < second.length; i ++){
    if (first.indexOf(second[i]) == -1){
      console.log(false);
    }
  }
}

mutation(["voodoo", "no"]);

// FALSY BOUNCER*********************************************
console.log("------------------------");

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  console.log(arr.filter(Boolean));
}

bouncer([1, null, NaN, 2, undefined]);

// DESTROYER***************************************************
console.log("------------------------");

function destroyer(arr) {
  var badValues = Array.prototype.slice.call(arguments);
  badValues.shift();
  return arr.filter(function(x) {return badValues.indexOf(x) == -1;});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// INSERT BY INDEX*********************************************
console.log("------------------------");

function getIndexToIns(arr, num) {
  
  arr.sort(function(a, b){return a-b;});
  var arr_len = arr.length;

  if (num > arr[arr.length -1]){
    return arr.length;
  }
  
  for (var i = 0; i < arr_len; i++){
    if (num <= arr[i]){
      arr.splice(i, 0, num);
      console.log(i);
    }
  }
}

getIndexToIns([5, 3, 20, 3], 5);

// CAESAR CIPHER*************************************************
console.log("------------------------");

function rot13(str) { // LBH QVQ VG!
  var number;
  var letter;
  var new_str = "";

  for (var i = 0; i < str.length; i++){
    number = str.charCodeAt(i);
    if (number > 64 && number < 91) {
      if (number <= 77){
        number += 13;
        letter = String.fromCharCode(number);
        console.log(letter);
        new_str += letter;
      } else {
        number -= 13;
        letter = String.fromCharCode(number);
        new_str += letter;
      }
    } else {
      new_str += str[i];
    }
  } console.log(new_str);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC!");

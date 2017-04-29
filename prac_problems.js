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

  while (arr.length > 0) {
    allArrays.push(collectionArray);
    for (var i = 0; i <= size; i ++){
      allArrays.push(arr[i]);
      arr.pop(arr[i]);
    }
  } console.log(collectionArray);
  console.log(allArrays);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

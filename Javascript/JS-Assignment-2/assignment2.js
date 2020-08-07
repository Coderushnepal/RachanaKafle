//  -------------Question4------------
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.

// Examples
// longestZero("01100001011000") ➞ "0000"

// longestZero("100100100") ➞ "00"

// longestZero("11111") ➞ ""

// -------------------solution--------------------

var sequence = function(str) {
	return str.split('1').sort().pop();
};
console.log(sequence('1110011000001100'));

// --------------------Question-5---------------------------
// create a function that takes a string and replaces the vowels with another character.
 
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"

// replaceVowel("chembur") ➞ "ch2mb5r"

// replaceVowel("khandbari") ➞ "kh1ndb1r3"

//---------------------solution--------------------------
function replaceVowel(str) {
	var arr = str.split('');
	for (var i = 0; i < str.length; i++) {
	  var char = str[i].toLowerCase();
	  switch(char) {
		case "a":
			arr[i] = 1;
		  break;
		case "e":
			arr[i] = 2;
		  break;
		case "i":
			arr[i] = 3;
		  break;
		case "o":
			arr[i] = 4;
		  break;
		case "u":
			arr[i] = 5;
		  break;
		default:
			arr[i];                                     
	  }                                                    
	                                                       
	}
	return arr.join('');   
  }
                                                    
console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));

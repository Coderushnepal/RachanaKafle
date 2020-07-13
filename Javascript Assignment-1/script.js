
console.log("======Question-1=====")
console.log("answer of questions")
function Pattern(str) {
	let result = '';
	for (let i = str; i >= 1; i--) {
		for (let j = 1; j <= i; j++) {
			result = result.concat('*');
		}
		result = result.concat('\n');
	}
	return result;
};
console.log(Pattern(5));


console.log("======Question-2=====")
console.log("answer of questions")
function censor(string) {
	let words = string.split(" ");
	for (let i = 0; i < words.length; i++) {
	  if (words[i].length > 4) {
		words[i] = "*".repeat(words[i].length);
	  }
	}
	let result = words.join(" ");
	return result;
  }
console.log(censor("The code is fourty"))
console.log(censor("Two plus three is five"))
console.log(censor("aaaa aaaaa 1234 12345")) 


console.log("======Question-3=====")
console.log("answer of questions")
function toArray(obj) {
    let keys = Object.keys(obj);  
	let len = keys.length;
	let arr = [];
	for (let i = 0; i < len; i++) {
		arr.push([ keys[i], obj[keys[i]] ]);
	}
	return arr;
}
//another way
// function toArray(obj){
// 	let arr=Object.entries(obj);
// 	return arr;
// }
console.log(toArray({ a: 1, b: 2 ,c:3}));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));


console.log("======Question-4=====")
console.log("answer of questions")
function identicalFilter(arr) {
	let identical = [];
	for (i = 0; i < arr.length; i++) {
		let repeatation = new Set(arr[i]);
		if (repeatation.size === 1) {
			identical.push(arr[i]);
		}
	}
	return identical;
}
console.log(identicalFilter(["88", "999", "22", "545", "133"]))
console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]))


console.log("======Question-5=====")
console.log("answer of questions")
function keysAndValues(obj) {
	let keys = Object.keys(obj);
	keys.sort();
	let values = [];
	for (i = 0; i < keys.length; i++) {
		values[i] = obj[keys[i]];
	}
	return [ keys, values ];
}

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))

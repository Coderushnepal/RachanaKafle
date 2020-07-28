// step
//create an array of word
//pick a random word from the word array
//create dashes based on the length of word
//get user input
//if right push to right array
//if wrong push to wrong array


//create an array of word
const word=["Neeta",
"Neha",
"Srijana",
"Sami",
"Kirtee",
"Trija",
"Sindhu",
"Kusum" ,
"Elisha",
"Rachana",
"Barsha",
"Pooja",
"Bisikha",
"Kritika"];
console.log(word)

//pick a random word from the word array
let randWord = Math.floor(Math.random() * word.length);
console.log(randWord)
let choosenWord=word[randWord]
console.log(choosenWord)


//create dashes based on the length of word
let dash=[]
let generateDash=()=> {
  for (var i = 0; i < choosenWord.length; i++) {
    dash.push('_')

}
return dash;
}
console.log(generateDash())
// get users guess
// document.addEventListener('keypress', (event) =>{ 
//   console.log(event);
//   console.log(event.key);
// });

document.addEventListener('keypress' , function(event) {
    console.log(event);
    console.log(event.key);

//   //Key codes - A number which represents an actual key on the keyboard
  let keycode=event.keyCode;
  console.log(keycode)
 //convert into character
  let keyword=String.fromCharCode(keycode);
  console.log(keyword)
});

















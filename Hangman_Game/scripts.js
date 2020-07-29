// // step
// //create an array of word
// //pick a random word from the word array
// //create dashes based on the length of word
// //get user input
// //if right push to right array
// //if wrong push to wrong array


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
let choosenWord=word[randWord].toLowerCase()
console.log(choosenWord)
let rightWord=[]
console.log(rightWord)
let wrongWord=[]


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

 //Key codes - A number which represents an actual key on the keyboard
  let keycode=event.keyCode;
  console.log(keycode)
 //convert into character
  let keyword=String.fromCharCode(keycode);
  console.log(keyword)

  //if users guess is right
  // The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.
  if (choosenWord.indexOf(keyword)>-1){
    //add to rigght word array
    rightWord.push(keyword);
    console.log(rightWord)

    // replace underscore with right letter
    dash[choosenWord.indexOf(keyword)]=keyword;
    console.log(dash)

//checks to see if user word matches guesses
    if(dash.join('')==choosenWord){
      alert('You win');

    }
  }
  
});






























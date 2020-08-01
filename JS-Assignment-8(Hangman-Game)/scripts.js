 // step
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
// let rightWord=[]
let rightWord=new Set();
console.log(rightWord)
// let wrongWord=[]
let wrongWord=new Set();
//Dom manipulation
let docDash=document.getElementById('dash-container')
let docRightGuess=document.getElementById('rightGuess')
let docwrongGuess=document.getElementById('wrongGuess')

const figures=document.getElementsByClassName('figure-part')
var i=0;
document.addEventListener('DOMContentLoaded', function() {
	Array.from(figures).forEach((value) => {
		value.style.visibility = 'hidden';
	});
});

//display figure part
function displyaFigureParts() {
	figures[i].style.visibility = 'visible';
	i++;
}

//create dashes based on the length of word
let dash=[]
let generateDash=()=> {
  for (var i = 0; i < choosenWord.length; i++) {
    dash.push("-")
}
docDash.innerHTML=dash.join("")
return dash;
}
console.log(generateDash())

document.addEventListener('keypress' , function(event) {
    console.log(event);
    console.log(event.key);
  //Key codes - A number which represents an actual key on the keyboard
    let keycode=event.keyCode;
    console.log(keycode)
  //convert into keyword
    let keyword=String.fromCharCode(keycode).toLowerCase();
    console.log(keyword)

  if (choosenWord.indexOf(keyword)>-1){
    //add to right word array
    for(let i=0;i<choosenWord.length;i++){
      rightWord.add(keyword);
      console.log(rightWord,Array.from(rightWord).join(" ,"))
      docRightGuess.innerHTML="Right Guess: "+Array.from(rightWord).join(", ")
      console.log(keyword,choosenWord[i])
      //replace with dash
      if(keyword==choosenWord[i]){
      var temp=docDash.innerHTML;
      temp = Array.from(temp) 
      temp[i]=keyword 
      docDash.innerHTML = temp.join('') 
      console.log(temp,temp[i])
      if(docDash.innerText==choosenWord){      
        alert('You win');
      }
     }
    }
  }
  else{
    if(wrongWord.has(keyword)){
      // do not add another body part if same wrong word is guessed
    }else{
    wrongWord.add(keyword);
    console.log(wrongWord)
    docwrongGuess.innerHTML="Wrong Guess: "+Array.from(wrongWord).join(", ")
    displyaFigureParts()
    if(wrongWord.size==6){          
      alert('You lost');
    }
  }   
}
});






























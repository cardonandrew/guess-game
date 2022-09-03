/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

// document.getElementById("guessInput").addEventListener("keydown", e => e.preventDefault());
  

  let randomNum = Math.floor(Math.random() * 100 + 1);
    
  let guess = 1;
  
  document.getElementById("submitButton").onclick = function(){
  
 let userNum = document.getElementById("guessInput").value;
  let output = document.getElementById("outputText");
  let guesses = document.getElementById("previousGuess")

  let numArr = []


    if (!(userNum)){return false}
    else {numArr.push(userNum)}

 if (userNum == randomNum)
 { 
    output.textContent = "YOU WIN! " + "You guessed " + guess + " times.";
 }
 else if (userNum > randomNum) 
 {    
     guess++;
    output.textContent = "OOPS SORRY!! TRY A SMALLER NUMBER";
 }
 else
 {
     guess++;
     output.textContent = "OOPS SORRY!! TRY A GREATER NUMBER";
     
 }

guesses.innerHTML = numArr
}



function refreshPage() {
        location.reload();
}


document.getElementById("hintButton").onclick = function hintMaker() {

    let box = document.getElementById("hintBox")

    if (randomNum > 70){ box.textContent = "Hint: 70-100"  }
    else if (randomNum < 30) {box.textContent = "Hint: 1-29"}
    else {box.textContent = "Hint: 30-70"}
}


function hintDrop() {
    let x = document.getElementById("hintBox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

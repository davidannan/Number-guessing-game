
const username = prompt("Enter your Username");
console.log(`Welcome ${username}, Get ready to play`)

let points = 0;
let levels = 1;
let maxStage = 10;

for (let i = 2; i <= 10; i++){
  let comGuess = Math.floor(Math.random() * i)  + 1;
    console.log("");
  let guessNumber = parseInt(prompt(`Guess a number between 1 and ${i}`));
  if (guessNumber === comGuess){ 
    
    
    console.log(`You guessed right`);
    console.log(`You have ${points += 5} Points`);
    console.log("");

    console.log(`Level ${levels +=  1}`)
    
  }
  if (guessNumber !== comGuess){
    i--
    console.log("You didnt guess the right number, Try Again");
  }
  if (levels === maxStage) {
    console.log(`Congratulations ${username}, You have finished the game `);
    
  };
};

  
        
      
    
    
    




//let guessNumber = parseInt(prompt("Guess a number between 1 and 2"))
//if (guessNumber === 2){
  //console.log("You guessed the right number")

//else (console.log("Try again") );


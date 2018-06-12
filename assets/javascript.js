//variables

var wordArr = ["zebra", "xylophone", "platypus", "orangatang", "horse", "studious", "dapper", "quiet",
    "delighted", "zany", "javascript", "mysql", "html", "css", "green", "blue"
];

var wins = 0,
    losses = 0,
    clicks = 20,
  gameRunning = false,
    underScore = [],
    newWord,
    letUsedArr = [],
    guessedLetter = document.getElementById("letterUsed"),
    reset = document.getElementById("#resetbtn"),
    anwser = document.getElementById("anwser"),
    letterUsed = document.getElementById("letterUsed");
    

     
  

//generate word
newWord = wordArr[[Math.floor(Math.random() * wordArr.length)]];

//turn new word into its own array delim on character
charArr = newWord.split(" ");


//underscores
function startGame() {
    gameRunning = true;
    clicks;
    letUsedArr = [];
    underScore = [];
    reset;
    anwser;
    letterUsed;

    
    

    for (i = 0; i < newWord.length; i++) {
        if (newWord[i] === "_") {
            underScore.push(" ");

        } else(underScore.push(" _ "));
    }
    console.log('game running:', gameRunning)
    console.log('clicks:', clicks)
    console.log('letUsedArr:', letUsedArr)
    console.log('underScore:', underScore)
    
   
}

//actual game
document.onkeyup = function (letter) {
  
    letter = event.key;
    
   
    if (gameRunning === true && letUsedArr.indexOf(letter) === -1){
    
        letUsedArr.push(letter);

    } else if (!gameRunning)
        alert("game isnt running, refresh page!")
        
     else {
        alert("youve already guessed this letter!")
        clicks++;
    }

    if (charArr.indexOf(letter) === -1){
        clicks--;
       
        guessedLetter.textContent = letUsedArr.join(" ");
    }

    for (j = 0; j < newWord.length; j++) {
        if (newWord[j] === letter) {
        
            underScore[j] = letter;
    
        } 
    
    }
    
       
        guessedLetter.textContent = letUsedArr;
          document.querySelector("#anwser").innerHTML = underScore.join("");
    document.querySelector("#clicks").innerHTML = clicks;
    checkLoss();
     checkWin();
   
   
    

}

document.getElementById("resetbtn").onclick( function (){
    restartGame();
})
function checkLoss(){
    if(clicks < 0){
        losses++;
        alert("Sorry pal, you lost :/ The anwser was " + newWord + "  Hit refresh and try again!")
        document.querySelector("#loss").innerHTML = losses;
        gameRunning = false;
        
    }
}

function checkWin(){
    if(newWord === underScore.join("") )
    {
    
        
        
        wins++;
        alert("congrats, youve won!")
        document.querySelector("#wins").innerHTML = wins;
        wins++;
        gameRunning = false;
       
       
    }
} 
function restartGame(){
//if (gameRunning === false && clicks < 1){
    console.log("restartGame")

     startGame();
//}
}
document.querySelector("#wins").innerHTML = wins;
document.querySelector("#loss").innerHTML = losses;
    restartGame();
 startGame();





const boxes = document.querySelectorAll(".box");
const endScreen = document.querySelector(".endScreen");
const restartBtn = document.querySelector(".playAgain");

let p1Turn = true;

const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let p1Choices = [];
let p2Choices = [];

startGame()

function startGame(){
    for(i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("click", gameTurns, {once: true})
    }
}


function gameTurns(e){
    const userClicked = e.currentTarget;

    console.log(userClicked.id)

    if(userClicked.classList.contains("x", "o")){
        console.log("box already occupied");
    }
    else if(p1Turn){
        userClicked.classList.add("x");
        userClicked.textContent = "X";
        p1Turn = false;
        p1Choices.push(userClicked.id)
    } else {
        userClicked.classList.add("o");
        userClicked.textContent = "O";
        p1Turn = true;
        p2Choices.push(userClicked.id)
    }
    console.log("p1: ", p1Choices,"p2: ", p2Choices);

    
    checkWin();
}

function checkWin(){
    const p1 = p1Choices.map(Number);
    const p2 = p2Choices.map(Number);

    const p1Won = winningCombos.some(combo => 
        combo.every(index => p1.includes(index))
    );
    const p2Won = winningCombos.some(combo => 
        combo.every(index => p2.includes(index))
    );

    if (p1Won) {
        endScreen.firstElementChild.textContent = "Player 1 (X) Wins!";
        endGame()
    } else if (p2Won) {
        endScreen.firstElementChild.textContent = "Player 2 (O) Wins!";
        endGame()
    } else if (p1Choices.length + p2Choices.length === 9) {
        endScreen.firstElementChild.textContent = "It's a Draw!";
        endGame()
    }

}

function endGame() {
    endScreen.classList.remove("hidden")
}

restartBtn.addEventListener("click", () =>{
    p1Choices = [];
    p2Choices = [];
    endScreen.classList.add("hidden");

    for(i = 0; i < boxes.length; i++){
    boxes[i].classList.remove("x", "o");
    boxes[i].textContent = "";
    boxes[i].removeEventListener("click", gameTurns)
    }
    startGame()
})

const boxes = document.querySelectorAll(".box");
const endScreen = document.querySelector(".endScreen");

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

let boxPattern = []

for(i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", gameTurns, {once: true})
}

function gameTurns(e){
    const userClicked = e.currentTarget;

    boxPattern.push(userClicked.id)
    console.log(userClicked.id)
    console.log(boxPattern);

    if(userClicked.classList.contains("x", "o")){
        console.log("box already occupied");
    }
    else if(p1Turn){
        userClicked.classList.add("x");
        userClicked.textContent = "X";
        p1Turn = false;
    } else {
        userClicked.classList.add("o");
        userClicked.textContent = "O";
        p1Turn = true;
    }

    
    checkWin();
}

function checkWin(){

}
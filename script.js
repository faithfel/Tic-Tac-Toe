const boxes = document.querySelectorAll(".box");
const endScreen = document.querySelector(".endScreen");

let p1Turn = true;

for(i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", gameTurns)
}

function gameTurns(e){
    const userClicked = e.currentTarget;
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


}


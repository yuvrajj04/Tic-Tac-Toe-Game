let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let newGame=document.querySelector(".newGame");
let msg = document.querySelector(".msg");
let msgContainer=document.querySelector(".msgContainer");
let hide=document.querySelector(".hide");
let player1=true;

const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//check winner func
const checkWinner=()=>{
    for(let pattern of winningPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1==='X' && pos2==='X' && pos3==='X'){
                msgContainer.classList.remove('hide');
                msg.innerText=`Winner is Player ${pos1}`;
            }
            else if (pos1==='O' && pos2==='O' && pos3==='O'){
                msgContainer.classList.remove('hide');
                msg.innerText=`Winner is Player ${pos1}`;
            }
            
        }
    }
}

//this func is to change the text to X & O when clicked on the buttons.
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(player1){
            box.innerText = "X";
            player1=false;
            
        }else{
            box.innerText = "O";
            player1=true;
            
        }
        box.disabled=true;
        checkWinner();
    });
})

const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

//reset the game ||new Game
const resetGame= ()=>{
    player1=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
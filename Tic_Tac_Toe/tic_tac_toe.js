let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset_btn")
let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let main_div=document.getElementById("main-div");

let turnO=true; // playerX,playerO

const Winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
 let count=0;
boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        
        if(turnO){
            box.innerText="O";
            box.style.color = "blue";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color = "red";
            turnO=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
        
    })
})
const checkWinner= () => {
    for(let pattern of Winpatterns){
        
        
            let pos1Val= boxes[pattern[0]].innerText;
            let pos2Val= boxes[pattern[1]].innerText; 
            let pos3Val= boxes[pattern[2]].innerText;

            if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
                if(pos1Val===pos2Val && pos1Val===pos3Val){
                    showWinner(pos1Val);
                    count=0;
                    boxes[pattern[0]].innerText="Tic";
                    boxes[pattern[1]].innerText="Tac";
                    boxes[pattern[2]].innerText="Toe";
                }
            }
            if(count===9){
                msg.innerHTML="Draw !";
                msgContainer.classList.remove("hide");
                count=0;
            }
    }
}
const showWinner=(winner) =>{
    msg.innerHTML=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    main_div.style.display='none';
    
}

const disableBoxes =() =>{
    for(let box of boxes) {
        box.disabled=true;
    }
}

const enableBoxes =() =>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerHTML="";
    }
}

const resetGame= () => {
     turnO=true;
     enableBoxes();
     count=0;
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


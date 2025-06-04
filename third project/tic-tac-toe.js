let boxes=document.querySelectorAll(".box");
let winner=document.querySelector(".winner");
let rstbtn=document.querySelector(".rst-btn");
let noofMatch=document.querySelector("#no-of-match");
let nomSmbt=document.querySelector(".nom-smbt");
let noMatch=document.querySelector(".noMatch-div");
let Oscr=document.querySelector(".Oscr");
let Xscr=document.querySelector(".Xscr");
let winSound=document.querySelector("#Sound");
let clkSound=document.querySelector("#click");
let errSound=document.querySelector("#error");

function checkNumber() {
 let matchno=noofMatch.value;  
 console.log("Currently stored value:",matchno);}

boxes.forEach((box)=>{
    box.disabled=true;
    rstbtn.disabled=true;
})

 nomSmbt.addEventListener("click",()=>{
if(noofMatch.value!==""){
[noofMatch, nomSmbt].forEach(el => el.hidden = true);
boxes.forEach((box)=>{
    box.disabled=false;
    rstbtn.disabled=false;
    winner.innerText="";
    winner.style.color="green";
});
}
else{
    winner.innerText="No. of match required!";
    winner.style.color="red";
    errSound.play();
}
 })


const winningPatterns=[
    [0, 3, 6],
    [0, 1, 2],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let turnO=true;
let playerO=document.querySelector(".playerO");
playerO.style.color="red";
playerO.style.fontSize="20px";

let playerX=document.querySelector(".playerX");
const winnerCheck=()=>{
    for(let pattern of winningPatterns){
       let  val1=boxes[pattern[0]].innerText;
       let  val2=boxes[pattern[1]].innerText;
       let  val3=boxes[pattern[2]].innerText;
       if(val1!==""&&val1===val2&&val2===val3){
       winner.innerText=`congratulation! player "${val1}" won (Reset the game)`;
       for(i=0;i<3;i++)
       boxes[pattern[i]].style.backgroundColor="rgb(0, 255, 150)";
       winSound.play();
      if(val1==="O"){
       Oscr.innerText=Number(Oscr.innerText)+1;}
       else{
         Xscr.innerText=Number(Xscr.innerText)+1;
       }
       const requiredWins = Math.floor(Number(noofMatch.value) / 2 +1);
            if (Number(Oscr.innerText) >= requiredWins || Number(Xscr.innerText) >= requiredWins) {
                winner.innerText = `congratulation! player "${val1}" won the game (Enter New game)`;
                rstbtn.disabled=true;
                boxes.forEach((box)=>{
                 box.disabled=true;})
               
            }
            
    boxes.forEach((box) => {
    box.disabled = true;
     });

        }
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO)
           { box.innerText="O";
            turnO=false;
            playerO.style.color="black";
            playerX.style.color="red";
            playerX.style.fontSize="20px";
            playerO.style.fontSize="15px";
        }
        else{
            box.innerText=`X`;
            turnO=true;
            playerO.style.color="red";
            playerO.style.fontSize="20px";
            playerX.style.fontSize="15px";
            playerX.style.color="black";
        } 

    box.style.backgroundColor="rgba(255,255,255,0.9)";
    box.disabled=true;
    clkSound.play();  
    winnerCheck(); 

        if ([...boxes].every(b => b.disabled) && !winner.innerText) {
            winner.innerText = "Game Draw! Resetting...";
            winner.style.color="blue";
            errSound.play();
            setTimeout(() => {
                resetGameBoard();
                winner.innerText = "";
                winner.style.color="green";
            }, 1500);
        }  

    })
})


function resetGameBoard() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "rgb(255,255,255)";
  });
  winner.innerText = "";
}
rstbtn.addEventListener("click", () => {
  resetGameBoard();
});


let nwGm=document.querySelector(".nw-gm");
nwGm.addEventListener("click" , ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.style.backgroundColor="rgb(255,255,255)";
        winner.innerText="";
        [noofMatch, nomSmbt].forEach(el => el.hidden = false);
         Oscr.innerText = Xscr.innerText = "0";
        noofMatch.value="";
        playerO.style.color="red";
        playerO.style.fontSize="20px";
        playerX.style.color="black";
        playerX.style.fontSize="15px";


    })
}) 
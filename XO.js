let boxs = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newBtn");
let msgHide=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winingPatten =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

const resetGame=()=>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
    
}

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO === true){
            box.innerText="O";
            turnO =false;
        }
        else{
            box.innerText="X";
            turnO =true;
        }
        box.disabled=true;
         checkWinner ();


        
    });
});

const disableBoxs =()=>{
    for(let box of boxs){
        box.disabled=true;
}};

const enableBox =()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
}};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgHide.classList.remove("hide");
    disableBoxs ();
}

const checkWinner = () =>{
    for (let patten of winingPatten) {
        // console.log(patten);
        // console.log(patten[0], patten[1],patten[2]);
        // console.log(
        //             boxs[patten[0]].innerText,
        //             boxs[patten[1]].innerText,
        //             boxs[patten[2]].innerText);

        let pos1Val=boxs[patten[0]].innerText;
        let pos2Val=boxs[patten[1]].innerText;
        let pos3Val=boxs[patten[2]].innerText;
        
        if (pos1Val !="" && pos2Val !="" && pos3Val !="" ){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner",pos1Val);
            showWinner(pos1Val);
            }
        }
    }
};


newBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);
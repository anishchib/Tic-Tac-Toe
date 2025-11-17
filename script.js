let turnO=true; 
let msg=document.querySelector("#message");
let btns=document.querySelectorAll(".btn");
let msgC=document.querySelector(".message-container");
let newGame= document.querySelector("#newBtn");
let wins = [
  // Horizontal wins
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Vertical wins
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonal wins
  [0, 4, 8],
  [2, 4, 6]
];

btns.forEach((btnn)=>{
    btnn.addEventListener("click",()=>{
       // console.log("button clicked");
        if(turnO)
        {
            btnn.innerText="O";
            turnO=false;
        }
        else{
            btnn.innerText="X";
            turnO=true;
        }
btnn.disabled=true;
checkwinner();
    });
});

const disableButtons = () => {
btns.forEach(element => {
        element.disabled = true;
    });
};

const enableButtons = () => {
btns.forEach(element => {
    element.innerText="";
        element.disabled = false;
    });
};

const showWinner=(winner)=>{
    disableButtons();
msg.innerText=`Winner is  ${winner}`;
msgC.classList.remove("hide")

};
const checkwinner=()=>{
wins.forEach(element => {
   // console.log(element[0],element[1],element[2]);
     // console.log(btns[element[0]],btns[element[1]],btns[element[2]]);
       let v1=btns[element[0]].innerText;
        let v2=btns[element[1]].innerText;
        let v3=btns[element[2]].innerText;
  // console.log(element[0],element[1],element[2]);
        if(v1!="" && v2!="" && v3!="")
        {
        //console.log("Button is clicked");
            
            // console.log(v1,v2,v3);
                if(v1===v2 && v2===v3)
                    {
                // console.log(v1,v2,v3);
                showWinner(v1);
                
            }
        }
});

};

newGame.addEventListener("click",()=>{

msgC.classList.add("hide")
enableButtons();

});

document.querySelector("#resetBtn").addEventListener("click",()=>{
msgC.classList.add("hide")
enableButtons();
});
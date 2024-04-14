let userSeq=[]; 
let gameSeq=[]; 
let btns=["orange","red","purple","green"]; 

let maxScore=0;
let isStarted=false; 
let level=0; 

document.addEventListener("keypress",function (){ 
    let h3 =document.querySelector("h3");
    h3.innerHTML=`Highest Score: ${maxScore}`;
    if(isStarted==false){ 
    console.log("game is started"); 
    isStarted=true;  

    setTimeout(levelUp,220);   
    }
});

function flash(btn){  
    btn.classList.add("flash");  
    setTimeout(function(){   
        btn.classList.remove("flash");  
    },180); 
}

function levelUp(){  
    userSeq=[]; 

    level++;
      
    let h2=document.querySelector("h2"); 
    h2.innerText=`level ${level}`;  

    let randIdx=Math.floor(Math.random()*3); 
    let randCol=btns[randIdx];  
    let randBtn=document.querySelector(`#${randCol}`); 

    gameSeq.push(randCol);  
    flash(randBtn); 


}

function checkAns(idx){   
    // let idx=userSeq.length-1;
    if(gameSeq[idx] === userSeq[idx]){  
        if(gameSeq.length == userSeq.length){   
            setTimeout(levelUp,1000); 
        }

    }
    else{
        let h2=document.querySelector("h2");
        h2.innerHTML=`Game over! Your score is <b>${level-1}</b> <br> Press any key to start`;  
        let body=document.querySelector("body"); 
        body.style.backgroundColor="red";  
        setTimeout(function (){
            body.style.backgroundColor="white"; 
        },150);

        restart(); 

    }
}

function restart(){ 
    isStarted=false;
    maxScore=Math.max(maxScore,level-1);
    level=0;
    gameSeq=[];
    userSeq=[]; 
}


function pressBtn(){  
    let btn=this;  

    flash(btn);  
    att=btn.getAttribute("id");
    userSeq.push(att); 

    checkAns(userSeq.length-1);  
}


let allBtns=document.querySelectorAll(".box"); 
for(btn of allBtns){  
    btn.addEventListener("click",pressBtn);  
}


// function userSelect(){
//     userSeq.add(this.getAttribute("id"));
// }



// function getRandomColor(){
//     return Math.floor(Math.random()*3);
// }







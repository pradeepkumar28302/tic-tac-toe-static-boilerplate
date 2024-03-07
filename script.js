let text="O"
let count=0;
let result=document.getElementById("result")
let message=document.getElementById('message')
let button=document.getElementById('button')

const box=document.querySelectorAll('.box')
for(let i=0;i<box.length;i++){
    box[i].addEventListener("click",handleClick)
}

function handleClick(e){
    if(!e.target.innerHTML){
        text=text=="O"?'X':"O"
        e.target.innerHTML=`<h2 id="tic-tac">${text}</h2>`;
        count++;
    }
    if(count==9){
        showResult("It's a 'DRAW'")
    }
    checkResult()
}

function checkResult(){
    if(box[0].innerText+box[1].innerText+box[2].innerText=="XXX"||
    box[3].innerText+box[4].innerText+box[5].innerText=="XXX"||
    box[6].innerText+box[7].innerText+box[8].innerText=="XXX"||
    box[0].innerText+box[3].innerText+box[6].innerText=="XXX"||
    box[1].innerText+box[4].innerText+box[7].innerText=="XXX"||
    box[2].innerText+box[5].innerText+box[8].innerText=="XXX"||
    box[0].innerText+box[4].innerText+box[8].innerText=="XXX"||
    box[2].innerText+box[4].innerText+box[6].innerText=="XXX"){
        showResult("'X' Won the game!")
    }
    else if(box[0].innerText+box[1].innerText+box[2].innerText=="OOO"||
    box[3].innerText+box[4].innerText+box[5].innerText=="OOO"||
    box[6].innerText+box[7].innerText+box[8].innerText=="OOO"||
    box[0].innerText+box[3].innerText+box[6].innerText=="OOO"||
    box[1].innerText+box[4].innerText+box[7].innerText=="OOO"||
    box[2].innerText+box[5].innerText+box[8].innerText=="OOO"||
    box[0].innerText+box[4].innerText+box[8].innerText=="OOO"||
    box[2].innerText+box[4].innerText+box[6].innerText=="OOO"){
        showResult("'O' Won the game!")
    }
}

function showResult(char){
    message.innerText=char
    result.style.visibility="visible"
}

button.addEventListener("click",()=>{
    location.reload()
})
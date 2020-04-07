var input = document.getElementById("input")

function insert(num){
   if(isNaN(num)){
        if(isNaN(input.innerHTML[input.innerText.length-1])){
            input.innerHTML = input.innerHTML.slice(0,-1) + num;
        }
        else{
            input.innerHTML +=num
        }       
   }
   else{
        input.innerHTML+=num
   }
}

function keyPress(){
    if(!isNaN(event.key) || event.key==="+" || event.key==="-" || event.key==="*" || event.key==="/" || event.key==="."){
        if(isNaN(event.key)){
            if(isNaN(input.innerHTML[input.innerText.length-1])){
                let sliced = input.innerHTML.slice(0,-1)
                input.innerHTML = sliced + event.key;
            }
            else{
                input.innerHTML += event.key
            }       
       }
       else{
            input.innerHTML += event.key
       }
    }   
}
function equalPress(){
    if (event.key==="Enter"){
        input.innerHTML=eval(input.innerHTML)
    }
}
function backspace(){
    if (event.key==="Backspace"){
        input.innerHTML = input.innerHTML.slice(0,-1)
    }
}
document.addEventListener("keypress", keyPress)
document.addEventListener("keypress", equalPress)
document.addEventListener("keydown", backspace)

function equal(){
    input.innerHTML=eval(input.innerHTML)
}
function clear(){
    input.innerHTML=""
}
var buttonC = document.getElementById("btnC")
buttonC.addEventListener("click", clear)

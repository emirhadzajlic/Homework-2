
function getWinner(){

    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9")
    
    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        winBoxes(box1, box2, box3)
        setTimeout(replay,1000)
    }
    else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
        winBoxes(box4, box5, box6)
        setTimeout(replay,1000)
    }
    else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
        winBoxes(box7, box8, box9)
        setTimeout(replay,1000)
    }
    
    else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
        winBoxes(box1, box4, box7)
        setTimeout(replay,1000)
    }
    else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
        winBoxes(box2, box5, box8)
        setTimeout(replay,1000)
    }
    else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
        winBoxes(box3, box6, box9)
        setTimeout(replay,1000)
    }
    
    else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
        winBoxes(box1, box5, box9)
        setTimeout(replay,1000)
    }
    else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
        winBoxes(box3, box5, box7)
        setTimeout(replay,1000)
    }
    else{
        var br=0;
        for(var i=0;i<boxes.length;i++){
            if (boxes[i].innerHTML ===""){
                br++;
            }
        }
        if(br===0){
            tie()
            setTimeout(replay,1000)
        }
    }
}


var boxes = document.querySelectorAll("#main div")
var turn = document.getElementById("turn")

var xo = 0;

function winBoxes(b1,b2,b3){
    turn.innerHTML = b1.innerHTML + " Won!"
    turn.style.fontSize="80px"
}
function tie(){
    turn.innerHTML = "Tie!"
    turn.style.fontSize="80px"
}

function replay(){
    for(var i=0; i<boxes.length;i++){

        boxes[i].innerHTML=""
        turn.innerHTML="X's Turn"
        turn.style.fontSize="50px"
        xo=0
    }
}

for(var i=0; i<boxes.length;i++){
    boxes[i].addEventListener("click", function(){
        if(this.innerHTML !== "X" && this.innerHTML !== "O"){
            if(xo%2 === 0){
                this.innerHTML = "X";                
                turn.innerHTML="O's Turn"
                getWinner()
                xo++;
            }
            else{
                this.innerHTML = "O"              
                turn.innerHTML="X's Turn"
                getWinner()
                xo++;
            } 
        }
    })
}
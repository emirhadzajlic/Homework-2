var imgContainer = document.getElementById("box")

var image = ['a','b','c','d','e']

var i=image.length

function nextImage(){
    if(i<image.length){
        i++
    }
    else{
        i=1
    }
    imgContainer.innerHTML="<img src=img/"+image[i-1]+".jpg>"
}
function prewImage(){
    if(i>1){
        i--
    }
    else{
        i=image.length
    }
    imgContainer.innerHTML="<img src=img/"+image[i-1]+".jpg>"
}
function nextPress(){
    if(event.key==="ArrowRight"){
        nextImage()
    }
    document.addEventListener("keydown", nextPress)
}
function prewPress(){
    if(event.key==="ArrowLeft"){
        prewImage()
    }
    document.addEventListener("keydown", prewPress)
}
function stop(){
    document.removeEventListener("keydown", nextPress)
    document.removeEventListener("keydown", prewPress)
}

imgContainer.addEventListener("mouseover", nextPress)
imgContainer.addEventListener("mouseover", prewPress)
imgContainer.addEventListener("mouseleave", stop)

// var image = document.getElementsByTagName("img")
imgContainer.addEventListener("click", resize)
var close=document.getElementById("close")
var prewBtn=document.getElementById("prew")
var nextBtn=document.getElementById("next")
function resize(){
    imgContainer.style.width="90vw"
    imgContainer.style.height="90vh"
    imgContainer.style.margin= "0 auto 0 auto"
    close.style.display="block"
    prewBtn.style.left="3.8vw"
    nextBtn.style.left="85.08vw"
    prewBtn.style.top="-25vw"
    nextBtn.style.top="-25vw"
    // prewBtn.style.padding="30px"
    // nextBtn.style.padding="30px"
    // prewBtn.style.fontSize="40px"
    // nextBtn.style.fontSize="40px"
}

close.addEventListener("click",backNormal)
function backNormal(){
    imgContainer.style.width="600px"
    imgContainer.style.height="400px"
    imgContainer.style.margin= "100px auto 0 auto"
    close.style.display="none"
    prewBtn.style.left="27.5vw"
    nextBtn.style.left="62.68vw"
    prewBtn.style.top="-18vw"
    nextBtn.style.top="-18vw"
}


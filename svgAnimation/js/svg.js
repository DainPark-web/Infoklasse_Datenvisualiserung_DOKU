const svgSize = document.querySelector(".posFace");
const faceM = document.querySelector(".faceM");
const faceL = document.querySelector(".faceL");
const faceC = document.querySelector(".faceC");
const svgFont = document.querySelector(".svgFont");
const mouth = document.querySelector(".cls-2");

const mouthR = document.querySelector(".eyeR");
const mouthL = document.querySelector(".eyeL");

console.log(svgSize.clientWidth);
let mouseX = 0;
let mouseY = 0;

let fontPosX = -window.innerWidth/3;
let fontPosY = -window.innerWidth/9;

let eyeR = 20;
// mouthSvg
document.addEventListener("mousedown", () => {
    mouth.classList.toggle("newMouth")
    mouth.classList.toggle("mouthSvg");
    
    mouthR.style.fill ="#ff0000"
    mouthL.style.fill ="#fff"
    mouthL.style.r = `${eyeR}`;
    mouthR.style.r = `${eyeR}`;
})

document.addEventListener("mouseup", () => {
   
    mouth.classList.toggle("newMouth")
    mouth.classList.toggle("mouthSvg");
    mouthR.style.fill ="#000"
    mouthL.style.fill ="#000"
    mouthL.style.r = `50`;
    mouthR.style.r = `50`;
})

document.addEventListener("mousemove", (e) => {
    
     mouseX = e.pageX - (svgSize.clientWidth/2);
     mouseY = e.pageY - (svgSize.clientHeight/2);

     

    faceM.setAttribute("transform", `translate(${mouseX}, ${mouseY}) scale(1)`)
    faceL.setAttribute("transform", `translate(${100 + (mouseX /2.2)}, ${150 + (mouseY /4)})`)
    faceC.setAttribute("transform", `translate(${170 + (mouseX /1.5)}, ${280 + (mouseY/3)})`)
    
    
    svgFont.setAttribute("transform", `translate(${-550 + mouseX}, ${100 + mouseY}) scale(0.2) `)
    

    
    // console.log(faceM.getAttribute("transform"));
})

let moveUpDown = 0;
let time = 0;
function init(){
    time += 0.1;
    
    moveUpDown += Math.sin(time/2) * 2;
    faceM.setAttribute("transform", `translate(${mouseX}, ${mouseY + moveUpDown}) scale(1)`);
    window.requestAnimationFrame(init)
}

init();
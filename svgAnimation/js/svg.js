const svgSize = document.querySelector(".posFace");
const faceM = document.querySelector(".faceM");
const faceL = document.querySelector(".faceL");
const faceC = document.querySelector(".faceC");
const svgFont = document.querySelector(".svgFont");
const mouth = document.querySelector(".cls-2");

const mouthR = document.querySelector(".eyeR");
const mouthL = document.querySelector(".eyeL");
const tuk = document.querySelector(".tuk");

console.log(svgSize.clientWidth);
let mouseX = 0;
let mouseY = 0;

let fontPosX = -window.innerWidth/3;
let fontPosY = -window.innerWidth/9;

let eyeR = 20;

let cliked = false;

// mouthSvg
document.addEventListener("mousedown", () => {

    cliked = true;
    mouth.classList.toggle("newMouth")
    mouth.classList.toggle("mouthSvg");
    tuk.classList.toggle("tuk");
    tuk.classList.toggle("tukCliked");
    
    mouthR.style.fill ="#00ffff"
    mouthL.style.fill ="#000fff"
    mouthL.style.r = `${eyeR}`;
    mouthR.style.r = `${eyeR}`;
    mouthL.style.cx = `${419} `;
    mouthR.style.cx = `${50 }`;
})

document.addEventListener("mouseup", () => {
    cliked = false;
    mouth.classList.toggle("newMouth")
    mouth.classList.toggle("mouthSvg");
    tuk.classList.toggle("tuk");
    tuk.classList.toggle("tukCliked");
    mouthR.style.fill ="#000"
    mouthL.style.fill ="#000"
    mouthL.style.r = `50`;
    mouthR.style.r = `50`;
    mouthL.style.cx = `50`;
    mouthR.style.cx = `419`;
    tuk.style.stroke = "#000";
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
    if(cliked){

        mouthR.style.r = `${eyeR + Math.sin(time * 2) * 200}`;
        mouthL.style.r = `${eyeR + Math.cos(time * 2) * 200}`;
    }
    moveUpDown += Math.sin(time/2) * 2;
    faceM.setAttribute("transform", `translate(${mouseX}, ${mouseY + moveUpDown}) scale(1)`);
    window.requestAnimationFrame(init)
}

init();
const svgSize = document.querySelector(".posFace");
const faceM = document.querySelector(".faceM");
const faceL = document.querySelector(".faceL");
const faceC = document.querySelector(".faceC");
const svgFont = document.querySelector(".svgFont");
const mouth = document.querySelector(".cls-2");

const mouthR = document.querySelector(".eyeR");
const mouthL = document.querySelector(".eyeL");
const tuk = document.querySelector(".tuk");
const faceMain = document.querySelector(".faceMain");
const faceH = document.querySelectorAll(".faceH");
const eyeMain = document.querySelectorAll(".eyeMain");



//key
const mouseL = document.querySelector(".mouseL");
const keyZ = document.querySelector(".keyZ");
const keyX = document.querySelector(".keyX");
const keyC = document.querySelector(".keyC");
const keyV = document.querySelector(".keyV");

//textbox
const textBox0 = document.querySelector(".textBox-0");
const textBox1 = document.querySelector(".textBox-1");
const textBox2 = document.querySelector(".textBox-2");
const textBox3 = document.querySelector(".textBox-3");
const textContainer = document.querySelector(".textContainer");


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

    svgSize.style.background ="black";

    faceMain.style.fill = "#fff";

    faceH.forEach((e) => {
        e.style.stroke = "#fff";
    })

    eyeMain.forEach((e) => {
        e.style.fill = "#fff"
    })

    //key
    mouseL.style.opacity = "0.4";


    //text box

    // textContainer.style.border = "5px solid white";
    // textContainer.style.background = "none";
    textContainer.style.color = "white";

    keyZ.style.background = "#044B94"
    keyX.style.background = "#044B94"
    keyC.style.background = "#044B94"
    keyV.style.background = "#044B94"
    mouseL.style.background = "#044B94";
    // textBox0.style.display = "none";
    // textBox1.style.display = "none";
    // textBox2.style.display = "none";
    // textBox3.style.display = "none";
    
})

document.addEventListener("mouseup", () => {
    cliked = false;

    // textContainer.style.border = "5px solid black";
    // textContainer.style.background = "none";
    textContainer.style.color = "black";

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
    svgSize.style.background ="tomato";

    faceMain.style.fill = "#000";

    faceH.forEach((e) => {
        e.style.stroke = "#000";
    })

    eyeMain.forEach((e) => {
        e.style.fill = "#000"
    })
    keyZ.style.opacity = "1"
    keyX.style.opacity = "1"
    keyC.style.opacity = "1"
    keyV.style.opacity = "1"
    keyZ.style.background = "tomato"
    keyX.style.background = "tomato"
    keyC.style.background = "tomato"
    keyV.style.background = "tomato"
    //key
    mouseL.style.opacity = "1";
    mouseL.style.background = "tomato";
    
})

if(!cliked){
    document.addEventListener("keydown", (e) => {
        if(e.keyCode === 90){
            keyZ.style.opacity = "0.4"
            keyX.style.opacity = "1"
            keyC.style.opacity = "1"
            keyV.style.opacity = "1"
    
            mouthL.style.r = `50`;
            mouthR.style.r = `50`;
    
            eyeMain.forEach((e) => {
                e.style.fill = "rgba(0,0,0,0)"
            })
            faceH.forEach((e) => {
                e.style.stroke = "#000";
            })
    
            textContainer.style.display = "flex";
            textBox0.style.display = "none";
            textBox1.style.display = "flex";
            textBox2.style.display = "none";
            textBox3.style.display = "none";
        }
    
        if(e.keyCode === 88){
            keyZ.style.opacity = "1";
            keyX.style.opacity = "0.4"
            keyC.style.opacity = "1"
            keyV.style.opacity = "1"
    
            mouthL.style.r = `10`;
            mouthR.style.r = `10`;
    
            eyeMain.forEach((e) => {
                e.style.fill = "#000"
            })
            faceH.forEach((e) => {
                e.style.stroke = "#000";
            })
            textContainer.style.display = "flex";
            textBox0.style.display = "none";
            textBox1.style.display = "none";
            textBox2.style.display = "block";
            textBox3.style.display = "none";
        }
        if(e.keyCode === 67){
            keyZ.style.opacity = "1";
            keyX.style.opacity = "1"
            keyC.style.opacity = "0.4"
            keyV.style.opacity = "1"
    
            mouthL.style.r = `50`;
            mouthR.style.r = `50`;
    
            eyeMain.forEach((e) => {
                e.style.fill = "#000"
            });
            faceH.forEach((e) => {
                e.style.stroke = "#ffff00";
            })
            textContainer.style.display = "flex";
            textBox0.style.display = "none";
            textBox1.style.display = "none";
            textBox2.style.display = "none";
            textBox3.style.display = "block";
        }
        if(e.keyCode === 86){
            keyZ.style.opacity = "1";
            keyX.style.opacity = "1"
            keyC.style.opacity = "1"
            keyV.style.opacity = "0.4"
    
            mouthL.style.r = `50`;
            mouthR.style.r = `50`;
    
            eyeMain.forEach((e) => {
                e.style.fill = "#000"
            });
            faceH.forEach((e) => {
                e.style.stroke = "#000000";
            })
            textContainer.style.display = "flex";
            textBox0.style.display = "block";
            textBox1.style.display = "none";
            textBox2.style.display = "none";
            textBox3.style.display = "none";
        }
    })
}


document.addEventListener("mousemove", (e) => {
    
     mouseX = e.pageX - (svgSize.clientWidth/2);
     mouseY = e.pageY - (svgSize.clientHeight/2);

     

    faceM.setAttribute("transform", `translate(${mouseX}, ${mouseY}) scale(1)`)
    faceL.setAttribute("transform", `translate(${100 + (mouseX /2.2)}, ${150 + (mouseY /4)})`)
    faceC.setAttribute("transform", `translate(${170 + (mouseX /1.5)}, ${280 + (mouseY/3)})`)
    svgFont.setAttribute("transform", `translate(${mouseX}, ${500 + mouseY}) scale(0.2) `)
    
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
    svgFont.setAttribute("transform", `translate(${mouseX-40}, ${500 +mouseY + moveUpDown}) scale(0.2)`);
    window.requestAnimationFrame(init)
}

init();
const svgSize = document.querySelector(".posFace");
const faceM = document.querySelector(".faceM");
const faceL = document.querySelector(".faceL");
const faceC = document.querySelector(".faceC");

console.log(svgSize.clientWidth);
let mouseX = 0;
let mouseY = 0;
document.addEventListener("mousemove", (e) => {
    
     mouseX = e.pageX - (svgSize.clientWidth/2);
     mouseY = e.pageY - (svgSize.clientHeight/2);
    faceM.setAttribute("transform", `translate(${mouseX}, ${mouseY}) scale(1)`)
    faceL.setAttribute("transform", `translate(${100 + (mouseX /2.2)}, ${150 + (mouseY /4)})`)
    faceC.setAttribute("transform", `translate(${170 + (mouseX /1.5)}, ${280 + (mouseY/3)})`)
    
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
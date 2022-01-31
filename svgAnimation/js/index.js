const svgSize = document.querySelector(".posFace");
const faceM = document.querySelector(".faceM");
const faceL = document.querySelector(".faceL");
const faceC = document.querySelector(".faceC");

console.log(svgSize.clientWidth);
document.addEventListener("mousemove", (e) => {
    
    const mouseX = e.pageX - (svgSize.clientWidth/2);
    const mouseY = e.pageY - (svgSize.clientHeight/2);
    faceM.setAttribute("transform", `translate(${mouseX}, ${mouseY}) scale(1)`)
    faceL.setAttribute("transform", `translate(${100 + (mouseX /2.2)}, ${150 + (mouseY /4)})`)
    faceC.setAttribute("transform", `translate(${170 + (mouseX /1.5)}, ${280 + (mouseY/3)})`)
    
    console.log(mouseX, mouseY)
})
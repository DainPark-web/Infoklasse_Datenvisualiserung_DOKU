// mainlsjflkasdjfl test

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({});

console.log("test");
const HrefArray =[
    "./zeit/index.html",
    "./dateiv/index.html",
    "./storytelling/index.html",
    "./svgAnimation/svg.html"
]

const boxLs = document.querySelectorAll(".test");

let lo = "";
boxLs.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.preventDefault();

        if(e.target.id === "1"){
            console.log("d");
            lo = HrefArray[0]
        }
        if(e.target.id === "2"){
            lo = HrefArray[1]
        }
        if(e.target.id === "3"){
            lo = HrefArray[2]
        }
        if(e.target.id === "4"){
            lo = HrefArray[3]
        }
       

        tl.to(".boxLink", {
            y: 1000,
            duration: 1,
            opacity: 0,
            scale: 0.3,
            ease: "power3.out",
            stagger: {
                from: "random",
                amount: 0.2
            },
            
        },0).to("#nav", {
            yPercent: -100,
            duration: 1,
            opacity: 0,
            ease: "power3.out",
            onComplete: function(){
                window.location.href = lo;
            }
        },0.3)
    })
})

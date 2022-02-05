//ani

gsap.registerPlugin(ScrollTrigger);
let mtl = gsap.timeline({});

const mLinks = document.querySelectorAll(".tLink");




const mHrefs = [
    "./zeit/index.html",
    "./dateiv/index.html",
    "./storytelling/index.html"
];

let locationHref = "";
mLinks.forEach((e) => {
    e.addEventListener("click", (data) => {
        data.preventDefault();
       
        const targetId = data.target.id;
        if(targetId === "m1"){
            locationHref = mHrefs[0]
        }
        if(targetId === "m2"){
            locationHref = mHrefs[1]
        }
        if(targetId === "m3"){
            locationHref = mHrefs[2]
        };

        mtl.to(".aBox", {
            duration: 3,
            y: 500,
            ease: "power3.out",
            stagger: {
                from: "random",
                amount: 0.2
            },
        },0).to(".textContainer", {
            xPercent: 130,
            duration: 2,
            ease: "power3.out",
            onComplete: () => window.location.href= locationHref
        }, 0.3)
    })
})
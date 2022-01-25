gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({});


const boxL = document.querySelector("#boxlo");
const boxLs = document.querySelectorAll(".boxLink");

// boxL.addEventListener("click", (e) => {
//     e.preventDefault();
//     tl.
//     console.log("fuck");
// })


boxLs.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target.href);
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
                window.location.href = e.target.href;
            }
        },0.3)
    })
})

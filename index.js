gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({});



const boxLs = document.querySelectorAll(".boxLink");



boxLs.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.preventDefault();

        //error handling 👨‍💻 Ich weiss nicht manchmal bekomme ich undefined als href
        console.log(e.target.href);
        if(e.target.href === undefined){
            window.location.href = "/";
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
                window.location.href = e.target.href;
            }
        },0.3)
    })
})

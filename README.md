# Infoklasse Coding Dokumentation

## Zeit Visualisierung
📍 Location : /zeit

- Ich habe gelernt, wie man p5.js benutzen kann. Besonders für mich push(), pop() waren interessant


## Datei Visualisierung
📍 Location : /dateiv

- Ich habe gelernt, wie man Datei mit CSV visualisieren kann.
- Und Ich habe besonders viel über Array gelernt.
``` javascript

const array = [3,5,2,1,6,8,4];
array.sort((a, b) => a - b);
console.log(array);
// [1,2,3,4,5,6,8]

array.sort((a,b) => b - a);
console.log(array);
// [8, 6, 5, 4,3,2,1]
```

## Storytelling
📍 Location : /storytelling

- Ich habe besonders viel GSAP durch die Arbeit gelernt.

``` javascript
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({visibility: "hidden"});

var tl1 = gsap.timeline({
  onStart :function() {console.log("start")},
  onComplete: function() {console.log("finished")},
    // scrollTrigger: { 
    //   trigger: '.main1',
    //   start: "10% top",
    //   markers: true,
    //   end: 'bottom top',
    //   snap: true, 
    //   toggleActions:"restart complete reverse reverse",
      
    // },
  });
```
* visibility : "hidden" 
=> Dadurch kann man zuerst elements stecken, bevor animation anfängt

* onStart : function
=> Wenn timeline anfängt funktioniert

* onComplete : function
=> Wenn timeline geendet wird, dann funktioniert.


### scrollTrigger 
```javascript
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({visibility: "hidden"});

var tl1 = gsap.timeline({
//   onStart :function() {console.log("start")},
//   onComplete: function() {console.log("finished")},
    scrollTrigger: { 
      trigger: '.main1',
      start: "10% top",
      markers: true,
      end: 'bottom top',
      snap: true, 
      toggleActions:"restart complete reverse reverse",
      
    },
  });

```
* scrub: duration hängt von Scroll ab
* snap: automatisch bewegt scroll zum element


### Tween
* xPercent vs x : xPercent is % 



## Inspiration
-[01. onStart, onComplete](https://greensock.com/forums/topic/19722-proper-use-of-oncomplete-callback/)<br />
-[02. onStart, onComplete, => HTML a href](https://greensock.com/forums/topic/17408-open-a-link-after-tweening/)


<br>
Ich mag nicht persönlich JQuery, deswegen weiss ich nicht gut darüber. Allerdings ich vermute, er hat mit Jquery geschrieben, deshalb habe ich wieder als ES6 geschrieben. 

``` javascript

const HrefArray =[
    "./zeit/index.html",
    "./dateiv/index.html",
    "./storytelling/index.html"
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
```
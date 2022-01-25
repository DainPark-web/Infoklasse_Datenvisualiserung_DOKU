# Infoklasse Coding Dokumentation

## Zeit Visualisierung
📍 Location : /zeit

- Ich habe gelernt, wie man p5.js benutzen kann. Besonders für mich push(), pop() waren interessant


## Datei Visualisierung
📍 Location : /dateiv

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
-[01. onStart, onComplete](https://greensock.com/forums/topic/19722-proper-use-of-oncomplete-callback/)
-[01. onStart, onComplete, => HTML a href](https://greensock.com/forums/topic/17408-open-a-link-after-tweening/)
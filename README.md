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
//CLOCK LIBRABRY
//Clock Function by Christian Swinehart 


//var now = clock()

// numerical values for elements of current time
//now.hours // hour in 0–23 'military' time
//now.hour  // hour in 1–12 'am/pm' time
//now.min   // minute
//now.sec   // seconds
//now.ms    // milliseconds
//now.am    // true for hours 0-11
//now.pm    // true for hours 12-23
//
//// numerical values for elements of current date
//now.year    // the full 4-digit year
//now.month   // month number 1–12
//now.moon    // the fullness of the moon 0–1.0
//now.day     // the day 1–{28,29,30,31}
//now.weekday // the day of the week 1-7
//now.season  // the current season 1-4 (starting with spring)

// a string-based representation that can be used as an argument to clockStart
//now.timestamp // "2001/12/31 23:45:56"

// values between 0.0 and 1.0 measuring the current time's %-completion of various cycles
//now.progress.year
//now.progress.season
//now.progress.month
//now.progress.moon
//now.progress.week
//now.progress.day
//now.progress.halfday
//now.progress.hour
//now.progress.min
//now.progress.sec

// string versions of the date & time (in case you want to print it out)
//now.text.time    // "11:45:56 P.M."
//now.text.hour    // "11"
//now.text.hours   // "23"
//now.text.min     // "45"
//now.text.sec     // "56"
//now.text.ampm    // "P.M."
//now.text.date    // "31 Dec 2001"
//now.text.year    // "2001"
//now.text.season  // "Winter"
//now.text.month   // "December"
//now.text.mon     // "Dec"
//now.text.day     // "31"
//now.text.weekday // "Monday"

let WIDTH = 800;
let HEIGHT = 800;
let time = 0;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  stroke(255);  

}


function draw() {
  var now = clock()
  const zeitDate = new Date();
  const se = zeitDate.getSeconds();
  background(0);
  var s = now.sec
  var m = now.min
  var h = now.hour
  var h2 = now.hours

  // let ampm = String(now.text.ampm) === "P.M.";
  // console.log(h);
  time += 0.4;
  translate(WIDTH/2, HEIGHT/2);
  angleMode(DEGREES);
  //center
  fill(255);
  stroke(255);
  strokeWeight(2);
  circle(0,0, 10);
  //sec
 
  for(let i = 0; i < s; i++){
    let x = 0;
    let y = -50;
    let y2 = -200 - sin(i * time) * 10;
    push();
    rotate(6 * i);
    line(x, y, x, y2 );
    pop();
  }

  for(let i = 0; i < m; i++ ){
    let x = 0;
    let y = -250 - sin(i * time) * 5;
    push();
    rotate(6 * i);
    circle(x, y, 10);
    pop();
    }


    noFill();
    beginShape();
    
    for(let i = 0; i < h; i++){
    let r = 350 + sin(i * time / 2) * 20;
    let x = 0;
    let y = -r;
    let a = 30 * i;
    push();
    rotate(a);

    
    let x2 = cos((i - 3) * 30) * r;
    let y2 = sin((i - 3) * 30) * r;
  
  
    
    vertex(x2, y2);



    
    
    if(1 <= h2 && h2 <= 12){
      push();
      fill(255);
      circle(x, y, 30);
      pop();
    }
    if(h2 > 12){
      push();
      fill(100);
      noStroke();
      circle(x, y, 30);
      pop();
    }
    
    pop();
  }
  endShape();

  }



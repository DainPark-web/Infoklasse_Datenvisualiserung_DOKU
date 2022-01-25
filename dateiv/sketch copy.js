let data;
let itemList = [];
let HEIGHT = innerHeight;

const COLORS = {
  white: "#fff",
  subText: "#D9D9D9",
  shape: {
    a1: "#8C3048",
    a2: "#F2B6C6",
    a3: "#91D9BF",
    a4: "#F28C0F",
    a5: "#BEA3D9",
    a6: "#D99771"
  }

}

let bg;
let button;

function preload() {
  data = loadTable('02_UFO_sightings_selection.csv', 'ssv', 'header');

}




function setup() {
  createCanvas(innerWidth * 5, HEIGHT);
  angleMode(DEGREES);
  rectMode(CENTER);

  //bg
  bg = createGraphics(innerWidth * 5, innerHeight);
  bg.background(10);
  bg.noStroke();

  //kleine Sterne
  for(let i = 0; i < 30000; i++){
    let x = random(innerWidth * 5);
    let y = random(innerHeight);
    let n = noise(x * 0.01, y * 0.01) * 2;
   
    bg.fill(255, 100);
    bg.rect(x, y, n, n);
    
  }
  //grosse Sterne
  for(let i = 0; i < 1000; i++){
    let x = random(innerWidth * 5);
    let y = random(innerHeight);
    let n = noise(x * 0.01, y * 0.01) * 4;
   
    bg.fill(255, 150);
    bg.circle(x, y, n);
    
  }
  //Rendering Sterne
  image(bg, 0, 0);
 
  // let dur = data.getColumn("duration (seconds)");
  // let minDur = min(dur)
  // let maxDur = max(dur)


  for (var i = 0; i < data.getRowCount(); i++) {
    noStroke();
    let columnName = data.getString(i, "city").charAt(0).toUpperCase() + data.getString(i, "city").slice(1);
    let columnShape = data.getString(i, "shape");
    let columnDuration = data.getNum(i, "duration (seconds)");
    let columnDurationText = data.getString(i, "duration (hours/min)");
  
    //🍎item
    itemList.push(new Item(
      i * 100 + 100,
      HEIGHT-100, 
      columnName.length > 13 ? columnName.slice(0, 13) + "..." : columnName,
      columnDuration,
      columnShape,
      columnDurationText,
      COLORS
      )
      );

}
  for(let i = 0; i< itemList.length; i++){
    itemList[i].draw();
  }

  //button
  button = createButton('click me');
  button.position(0, 0);
  button.mousePressed(changeBG);
  

}

function draw() {}

function changeBG() {
  let val = random(255);
  background(val);
}


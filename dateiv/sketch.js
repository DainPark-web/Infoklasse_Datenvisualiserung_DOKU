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
let shapeBtn;
let durBtn;
let nameBtn;

let btnB = true;

let aLength = 80;

let newArray = [];

function preload() {
  data = loadTable('02_UFO_sightings_selection.csv', 'ssv', 'header');

}

let dis = 100;


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
  image(bg, 0, 0);
 
  // let dur = data.getColumn("duration (seconds)");
  // let minDur = min(dur)
  // let maxDur = max(dur)

  //Rendering Sterne
  console.log(data);
  // data.sort((a, b) => a.rows.arr[7] - b.rows.arr[7]);
  // console.log(data.rows);
  for (var i = 0; i < data.getRowCount(); i++) {
    noStroke();
    let columnName = data.getString(i, "city").charAt(0).toUpperCase() + data.getString(i, "city").slice(1);
    let columnShape = data.getString(i, "shape");
    let columnDuration = data.getNum(i, "duration (seconds)");
    let columnDurationText = data.getString(i, "duration (hours/min)");
  
    //🍎item
    itemList.push(new Item(
      
      columnName.length > 13 ? columnName.slice(0, 13) + "..." : columnName,
      columnDuration,
      columnShape,
      columnDurationText,
      COLORS,
      
      )
      );

}

  itemList = itemList.slice(0, aLength);
  
  console.log(itemList);

//  i,
// HEIGHT-100, 
  //button
shapeBtn = createButton('Shape');
shapeBtn.position(10, 20);
shapeBtn.mousePressed(() => changeBG(3));


durBtn = createButton('Size');
durBtn.position(10, 60);
durBtn.mousePressed(() => changeBG(1));

nameBtn = createButton('A-Z');
nameBtn.position(10, 100);
nameBtn.mousePressed(() => changeBG(2));




  for(let i = 0; i < aLength; i++){
    itemList[i].draw(i, HEIGHT-100);
    
  }

}

function draw() {
  
  
  


}

function changeBG(e) {
  console.log(e);
  // aLength = 10
  image(bg, 0, 0);
  // Hier brauch ich itemList array sortieren.
  if(btnB){
    if(e === 1){
    //dur
    itemList.sort((a, b) => b.dur - a.dur)
    }
    if(e === 2){
    //name
    itemList.sort((a, b) => a.cityName.localeCompare(b.cityName))
    }
    if(e === 3){
    //shapes
    itemList.sort((a, b) => a.shape.localeCompare(b.shape))
    }
   
   
    btnB = false;
  }else
 {
  if(e === 1){
    //dur
    itemList.sort((a, b) => a.dur - b.dur)
    }
    if(e === 2){
    //name
    itemList.sort((a, b) => b.cityName.localeCompare(a.cityName))
    }
    if(e === 3){
    //shapes
    itemList.sort((a, b) => b.shape.localeCompare(a.shape))
    }
   
    btnB = true;
  }
 
  for(let i = 0; i < aLength; i++){
    itemList[i].draw(i, HEIGHT-100,);
  }
}


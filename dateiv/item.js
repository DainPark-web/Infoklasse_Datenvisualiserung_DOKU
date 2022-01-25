class Item{
    constructor(city, duration, shape, durname, colors){
        this.pos = createVector(0, 0);
        this.cityName = city;
        this.dur = duration;
        this.shape = shape;
        this.durname = durname;
        this.colors = colors;
        
    }

    draw(x, y, dis){
        push();
        this.pos = createVector(x * 100 + 100, y)
        translate(this.pos.x, this.pos.y);
        circle(0, 0, 4);
       
        //text : city
        rotate(40);
        push();
        fill(this.colors.white);
        textSize(14);
        textStyle(BOLD);
        text(this.cityName, 0, 20);
        pop();
        
        //text : duration hours/min
        push();
        rotate(-90);
        fill(this.colors.subText);
        text(this.durname, 20, -10);
        pop();


        
        //duration : seconds
        rotate(-180)
        fill(this.colors.white);
        triangle(-5, 10, 0, log(this.dur) * 100, 5, 10);
        

        //shape
        switch (this.shape){
            case "circle" :
                fill(this.colors.shape.a1);
                circle(0, log(this.dur) * 100 + 50, 30);
                break;
            case "light" :
                fill(this.colors.shape.a2);
                ellipse(0, log(this.dur) * 100 + 50, 5, 30);
                ellipse(0, log(this.dur) * 100 + 50, 30, 5);
                break;
            case "cylinder" :
                push();
                noFill();
                stroke(this.colors.shape.a3);
                strokeWeight(6);
              
                ellipse(0, log(this.dur) * 100 + 50, 30, 20);
                pop();
                break;
            case "sphere" : 
                fill(this.colors.shape.a4);
                circle(0, log(this.dur) * 100 + 50, 20);
                circle(0, log(this.dur) * 100 + 75, 20);
                break;
            case "fireball" :
                fill(this.colors.shape.a5);
                ellipse(0, log(this.dur) * 100 + 50, 50, 20);
                ellipse(0, log(this.dur) * 100 + 60, 30, 20);
                ellipse(0, log(this.dur) * 100 + 80, 10, 10);
                break;
            case "oval":
                fill(this.colors.shape.a6);
                triangle(-10, log(this.dur) * 100 + 50, 0, log(this.dur) * 100 + 80, 10, log(this.dur) * 100 + 50);
                break;
            case "rectangle":
                fill(this.colors.shape.a1);
                rect(0, log(this.dur) * 100 + 50, 30, 30);
                break;
            case "chevron":
                fill(this.colors.shape.a2);
                rect(0, log(this.dur) * 100 + 50, 10, 30);
                rect(0, log(this.dur) * 100 + 50, 30, 10);
                break;
            case "other":
                push();
                noFill()
                stroke(this.colors.shape.a3);
                strokeWeight(6);
                rect(0, log(this.dur) * 100 + 50, 20, 20);
                pop();
                break;
            case "formation":
                push();
                noFill();
                stroke(this.colors.shape.a4);
                strokeWeight(6);
              
                ellipse(0, log(this.dur) * 100 + 50, 10, 30);
                ellipse(10, log(this.dur) * 100 + 50, 10, 30);
                ellipse(-10, log(this.dur) * 100 + 50, 10, 30);
               
                pop();
                break;
            default :
                push();
                fill(200);
                circle(0, log(this.dur) * 100 + 50, 10);
                pop();
                break;

        }
       
        pop();
    }

    


}
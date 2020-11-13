class Stone {
    constructor(x,y){
var stone_options={
    friction:1,
    isStatic:false,
    restitution:0,
    density:1.2
}
this.image = loadImage("Plucking mangoes/stone.png");
this.body = Bodies.rectangle(x,y,30,30, stone_options);
this.height = 30;
this.width = 30;
World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
    }
}
class Mango {
constructor(x,y,width, height){
var mango_options ={
    isStatic: true,
    friction: 1,
    restitution:0
}
this.body = Bodies.rectangle(x,y,width,height,mango_options);
this.width = width;
this.height = height;
World.add(world, this.mango);
}
display(){
    var position = this.body.position;
    rectMode(CENTER);
    rect(position.x, position.y, this.width, this.height);
}
}
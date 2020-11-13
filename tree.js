class Tree {
    constructor(x,y){
        var tree_options ={
            friction:0.5,
            density:1,
            restitution:1
        }
        this.body = Bodies.rectangle(x,y, 50, 150, tree_options);
        this.image = loadImage("Plucking mangoes/tree.png");
        this.height = 50;
        this.width = 50;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
    }
}
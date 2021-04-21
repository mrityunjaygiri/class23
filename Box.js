class Box{
constructor(x,y,width,height){
    var options = {

 
      }
     
      this.box = Bodies.rectangle(x,y,width,height,options);
      this.width=width
      this.height=height
      World.add(myWorld,this.box);
}
display(){
var pos=this.box.position;
var angle=this.box.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
    rectMode(CENTER);
fill("white")
rect(0, 0,this.width,this.height); 
pop();
}
}
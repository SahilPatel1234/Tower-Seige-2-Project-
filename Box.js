class Block{
  constructor(x,y, widht, height){
    var option = {
      restitution :0.3,
      friction :0.0,
    
    }
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, width, height, option);
    this. width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed <3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      Translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      Pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visbility = this.visbility -5;
      pop();
    }
  }
}

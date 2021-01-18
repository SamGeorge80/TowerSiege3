class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    this.Visibility=255;
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visibility - 5;
      tint(255,this.Visibility);
      //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
   }
   score(){
     console.log(this.Visibility);
    if (this.Visibility === 255 || this.Visibility > -40){
      score++;
    }
  }
};

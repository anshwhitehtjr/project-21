var wall,thickness,bullet,speed,weight;

function setup(){
  createCanvas(1600,800);
   thickness=random(22,83);
   wall=createSprite(1200, 200, thickness, height/2);
   speed=random(223,321);
   weight=random(30,52);
   bullet=createSprite(200,200,50,50);
   bullet.velocityX=12;
}

function draw(){
  background(0);
  


    if(hascollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * speed * speed/(thickness*thickness*thickness);

      if (damage>10){
         wall.shapeColor=color(255,0,0);
      }
      
      if(damage<10){
          wall.shapeColor=color(0,255,0);
      }                                           
    }
    drawSprites();
}


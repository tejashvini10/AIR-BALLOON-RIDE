

var database,position;
var balloon,background,background_img,balloon_img;

function preload() {

background_img=loadImage("Hot Air Ballon-01.png");
balloon_img=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
}

function setup() {
  database=firebase.database();
  console.log(database);
  createCanvas(800,800);
  balloon =createSprite(400, 200, 50, 50);
 balloon.addAnimation("balloon",balloon_img);
balloon.scale=0.5;



}



function draw() {
  background(background_img);  

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;

  }
 else if(keyDown(RIGHT_ARROW)){
   balloon.x=balloon.x+10;

 }
 else if(keyDown(UP_ARROW)){
   balloon.y=balloon.y-10;
 }
 else if(keyDown(DOWN_ARROW)){
   balloon.y=balloon.y+10;
 }
 

  drawSprites();
  textSize(15);
 fill("black");
 stroke("white");
 text("Use Arrow keys to move the hot Air balloon",200,50);

}


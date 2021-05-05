var cat1,cat1img;
var cat,catwalking;
var cat4,cat4img;

var mouse1,mouse1img;
var mouse,mousedancing;
var mouse4,mouse4img;

var garden;

function preload() {
    //loading the images
    garden = loadImage("images/garden.png");

    cat1img = loadAnimation("images/cat1.png");
    catwalking = loadAnimation("images/cat2.png","images/cat3.png");
    cat4img = loadAnimation("images/cat4.png");

    mouse1img = loadAnimation("images/mouse1.png");
    mousedancing = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    
    cat = createSprite(870,600);
    cat.addAnimation("sleeping",cat1img);
    cat.scale = 0.2;

    

    mouse = createSprite(200,600);
    mouse.addAnimation("standing",mouse1img);
    mouse.scale = 0.15;

   

}

function draw() {

    background(garden);
    
    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)) {
            cat.velocityX = 0;
            cat.x = 300;
            cat.scale = 0.2;
            cat.addAnimation("lastImage",cat4img);
            cat.changeAnimation("lastImage",cat4img);
            mouse.addAnimation("lastImage1",mouse4img)
            mouse.changeAnimation("lastImage1",mouse4img);
        }

        

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mousedancing);
      mouse.changeAnimation("mouseTeasing",mousedancing);
      mouse.frameDelay = 25;
      cat.addAnimation("walking",catwalking);
      cat.changeAnimation("walking",catwalking);
      cat.velocityX = -2
  }



}

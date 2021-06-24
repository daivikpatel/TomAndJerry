var bg,bgImg;
var cat,catImg1,catImg2,catImg3,catImg4,runningCat;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4,laughingMouse;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    runningCat=loadAnimation("images/cat2.png","images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    laughingMouse=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,500,100,100);
    bg.addImage("backround",bgImg);

    cat = createSprite(870,660,50,70);
    cat.addAnimation("Mrcat",catImg1);
    cat.scale=0.19;

    mouse = createSprite(120,660);
    mouse.addAnimation("MrMouse",mouseImg1);
    mouse.scale=0.19;




    


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        mouse.addAnimation("mouseimage", mouseImg4);
        mouse.changeAnimation("mouseimage");
        cat.addAnimation("catimage4", catImg4);
        cat.changeAnimation("catimage4");

    }

    drawSprites();
    console.log(frameCount);
   
}


function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode === LEFT_ARROW){
    mouse.addAnimation("Jerry",laughingMouse);
    mouse.changeAnimation("Jerry");
    mouse.frameDelay = 25;
   }

   
   if(keyCode === RIGHT_ARROW){
    cat.addAnimation("Tom",runningCat);
    cat.changeAnimation("Tom");
    cat.frameDelay = 25;
    cat.velocityX=-2;
   }



}



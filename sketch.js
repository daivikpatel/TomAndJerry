var bgImg;
var cat,catImg1,catImg2,catImg3,catImg4,runningCat;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4,laughingmouse;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");

    runningCat=loadAnimation("images/cat2.png","images/cat3.png")
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    runningCat = createSprite(20,400,50,70);
    


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    console.log(frameCount);
   
}


function keyPressed(){

  //For moving and changing animation write code here


}



//Create variables here
var dog;
var database;
var food,food1,food2,food3,food4,food5,food6;
var score=0;

function preload()
{
  dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  var loc=database.ref("dog/position");
  loc.on("value",readOP,showError);
  dog.addImage(dogimg);
  dog.scale=0.2;

  food=createSprite(100,100,20,20);
  
  food1=createSprite(290,400,20,20);
  
  food2=createSprite(350,100,20,20);
  
  food3=createSprite(400,250,20,20);
  
  food4=createSprite(450,150,20,20);
 
  food5=createSprite(120,120,20,20);
  
  food6=createSprite(420,50,20,20);
  
 
}


function draw() {  
  background("green");
  

  if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);
  }
  //changePosition();

  if(dog.isTouching(food)){
    dog.addImage(dogimg1);
    food.visible=false;
  }else {
    dog.addImage(dogimg);
  }

  if(dog.isTouching(food1)){
    dog.addImage(dogimg1);
    food1.visible=false;
  }else {
    dog.addImage(dogimg);
  }

  if(dog.isTouching(food2)){
    dog.addImage(dogimg1);
    food2.visible=false;
  }else {
    dog.addImage(dogimg);
  }

  if(dog.isTouching(food3)){
    dog.addImage(dogimg1);
    food3.visible=false;
  }else {
    dog.addImage(dogimg);
  }

  if(dog.isTouching(food4)){
    dog.addImage(dogimg1);
    food4.visible=false;
  }else {
    dog.addImage(dogimg);
  }

  if(dog.isTouching(food5)){
    dog.addImage(dogimg1);
    food5.visible=false;
  }else {
    dog.addImage(dogimg);
  }

  if(dog.isTouching(food6)){
    dog.addImage(dogimg1);
    food6.visible=false;
  }else {
    dog.addImage(dogimg);
  }
  

drawSprites();
}

function changePosition(x,y){
  dog.x=dog.x+x;
  dog.y=dog.y+y;
}

function readOP(data){
  position=data.val();
  dog.x=position.x;
  dog.y=position.y;
}
function showError(){
  console.log(showError);
}


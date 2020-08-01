//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogIMG, happyDogIMG;
var database;
var fedTime, lastFed;

function preload()
{
  //load images here
  dogIMG=loadImage("images/dogImg.png");
  happyDogIMG=loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();

  dog=createSprite(250, 450, 10,10);
	dog.addImage(dogIMG);
  dog.scale=0.2;
  


 
}


function draw() {  
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  if (foodS===0){
    dog.addImage(dogIMG);
  }

  fedTime=database.ref('feedTime');
  fedTime.on("value", (data) => {
    lastFed=data.val();
  });

  if (lastFed>=12){
    text("Last Fed: "+lastFed%12 + "PM", 350, 30);
  } else if (lastFed==0){
    text("Last Feed: 12 Am", 350,30)
  } else {
    text("Last Feed: "+lastFed+ "AM", 350,30);
  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white");
  stroke("white");
  text("Press UP ARROW key to feed Drago milk", 50,100);
  
  fill("white");
  stroke("white");
  text("Food left:" +foodS, 250,250);
}

function writeStock(x){

 if (x<=0){
   x=0;
 } 
 else{
   x=x-1;
 }

  database.ref('/').update({
    Food:x
  })
}
function feedDog(){
  dog.addImage(happyDog);


  foodObj.updateFoodStock(food.Obj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}



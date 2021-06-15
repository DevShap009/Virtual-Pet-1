var dog , happydog ;
var database ;
var foodS, foodStock ;
var dog_img, happydog_img

function preload() {
  dog_img = loadImage("Dog.png")
  happydog_img = loadImage("happydog.png")
}

function setup() {
	createCanvas(500,500);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog_img);
}
text("20")
  drawSprites();
  //add styles here

}




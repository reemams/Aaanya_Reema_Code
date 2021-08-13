var chefimg , fridgeImg, kitchenImg;

var chef, kitchen, fridge;
var food;

function preload()
{
 chefimg = loadImage("chef.png");
 fridgeImg = loadImage("fridge.png");
 kitchenImg = loadImage("kitchen.jpg");

 apple = loadImage("apple.png");
 banana = loadImage("banana.png");
 orange = loadImage("orange.png");


}



function setup()
{

createCanvas(600,500);




chef = createSprite(70,350,10,10);
chef.addImage(chefimg)
chef.scale = 0.4;

fridge = createSprite(450,300,10,10);
fridge.addImage(fridgeImg);
fridge.scale = 0.3
fridge.mirrorX(-1)
foodGroup = new Group();





}


function draw()
{

//if(background)
background("yellow");
if(keyDown("RIGHT_ARROW"))
{
chef.x = chef.x + 1;

}

else if (keyDown("LEFT_ARROW"))
{

  chef.x = chef.x - 3;

}

chef.depth = fridge.depth 
chef.depth = chef.depth + 3


if(chef.isTouching(foodGroup))
{
     background(kitchenImg);
     chef.visible = false;
     fridge.visible = false;
     foodGroup.hide();

  

}

foods();

drawSprites();

}

function foods()
{



     if(frameCount % 200 === 0)
     {
          food = createSprite(500,random(280,400));
          var rand = Math.round(random(1,3));
          food.scale = 0.04
          
        
          
          switch(rand)
          {
             case 1: food.addImage(orange);
                     break;
             case 2: food.addImage(banana);
                    break;
             case 3: food.addImage(apple);
                     break;
             default: break;
          }

           foodGroup.add(food);
         //  clear();
         
       
         
     }

    

}
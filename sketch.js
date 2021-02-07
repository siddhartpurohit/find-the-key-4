    //defineing the constants of matter.js;
    const Engine = Matter.Engine;
    const World  = Matter.World
    const Body = Matter.Body;
    const Bodies = Matter.Bodies;

    //defining the arrays
    var sprites,boy; 
    var health =[];
    var bag =[];
    var danger = [];
    var tools =[];

    //defineing the images of the game;
    var trapImg;
    var basketImg;
    var doorImg;
    var milkImg;
    var honeyImg;
    var healhtImg;
    var keyImg;
    var bananaImg;
    var swimmingClearImg;
    var banana2;
    var banana3;
    var boyImg2;
    var treeImg;
    var fireImg;
    var boyImg_walking
    var boyI;
    var bag10;
    var background1Img
    var background1
    var healhtImg;
    var dangerImg;

    //defineing the variable tress;
    var tree;
    var tree21;
    var tree22;
    var tree23;
    var tree24;
    var tree25;
    var tree1;
    var tree17;
    var tree18;
    var tree20;

    //defineing the engine and world 
    var engine,world;

    //defineing the moving sprites
    var boySprite;
    var bear;
    var bearSprite;

    //defineing the dangers of thr game
    var fire1;
    var fire2;
    var fire3;
    var fire4;
    var fire;
    var trap1;
    var trap2;
    var trap3;
    var trap4;

    //defineing the easyers of the game
    var health1;
    var milk1;
    var banana;
    var honey;

    // defineing the tools of the game
    var key4;
    var door1;
    var door2;
    var door3;
    var swimmingClear;
    var basket;
    var basket2;
    var basket3;
    var treasure2;
    var lock;
    var treasureImg;
    var lockImg;
    var bearSprite2;
    var bear2;
//defineing the function preload;    
function preload(){
    //defineing the animations of the game
    boyImg_walking = loadAnimation("man4.png","man5.png","man6.png","man7.png","man8.png");
    //defineing the images of the game
    boyImg2 = loadAnimation("man3.png");
    background1Img = loadImage("grass.jpeg");
    healhtImg = loadImage("HealthKit.jpg");
    treeImg = loadImage("tree1.png");
    fireImg = loadImage("fireImg.png");
    basketImg = loadImage("basket2.png");
    doorImg = loadImage("doorImg.png");
    milkImg = loadImage("Milk.png");
    honeyImg = loadImage("f.png");
    bananaImg = loadImage("orange2.png");
    swimmingClearImg = loadImage("swiminng.png");
    keyImg = loadImage("goldenKey.png");
    lockImg = loadImage("daco.png");
    treasureImg = loadImage("treasure.png");
}
//defineing the function setup
function setup() {

    createCanvas(5000,5000);

    engine = Engine.create();
    world = engine.world;

    bear = new Bear(200,4000);
    bear2 = new Bear(300,4000);
    boy = new Boy (2500,2500);

    boySprite = createSprite(4500,600,50,50);
    boySprite.addAnimation("standing",boyImg2);
    boySprite.addAnimation("walking",boyImg_walking)
   
   
   
    for(var i = 0;i<8;i++){
        fire = createSprite(random(0,5000),random(0,5000),50,50);
        fire.addImage(fireImg);     
        fire.scale = 0.4;
        danger.push(fire);
    }
 
     bag10 = createSprite(boy.x+900,boy.y-400,400,400);
     bag10.shapeColor = "black";

   
    health1 = createSprite(random(0,5000),random(0,5000),50,50);
    health1.addImage(healhtImg);
    health1.scale = 0.3;
    health.push(health1);

     treasure2 = createSprite(100,4000,50,50);
     treasure2.addImage(treasureImg);
     treasure2.scale = 0.3;

    milk1 = createSprite(random(0,5000),random(0,5000),50,50);
    milk1.addImage(milkImg);
    milk1.scale = 0.08;
    health.push(milk1);

    key4 = createSprite(random(0,5000),random(0,5000),50,50);
    key4.addImage(keyImg);
    key4.scale = 0.06;
    tools.push(key4);

    door1 = createSprite(2900,150,50,50);
    door1.addImage(doorImg);
    door1.scale = 0.6;
    tools.push(door1);

    door2 = createSprite(3800,150,50,50);
    door2.addImage(doorImg);
    door2.scale = 0.6;
    tools.push(door2)

    

    banana = createSprite(random(0,5000),random(0,5000),50,50);
    banana.addImage(bananaImg);
    banana.scale = 0.8;
    health.push(banana);

    banana2 = createSprite(random(0,5000),random(0,5000),50,50);
    banana2.addImage(bananaImg);
    banana2.scale = 0.8;
    health.push(banana2);

   
    honey = createSprite(random(0,5000),random(0,5000),50,50);
    honey.addImage(honeyImg);
    honey.scale = 0.1;
    tools.push(honey);

    swimmingClear = createSprite(random(0,5000),random(0,5000),50,50);
    swimmingClear.addImage(swimmingClearImg);
    swimmingClear.scale = 0.02;
    tools.push(swimmingClear);

    basket = createSprite(random(0,5000),random(0,5000),50,50);
    basket.addImage(basketImg);
    basket.scale = 1.0;
    tools.push(basket)

    
    trap1 = createSprite(random(0,5000),random(0,5000),200,200);
    trap1.visible = false
    danger.push(trap1)

    trap2 = createSprite(random(0,5000),random(0,5000),200,200);
    trap2.visible = false
    danger.push(trap2);

    trap3 = createSprite(random(0,5000),random(0,5000),200,200);
    trap3.visible = true
    danger.push(trap3)

    trap4 = createSprite(random(0,5000),random(0,5000),200,200);
    trap4.visible = true
    danger.push(trap4);
    


 
    bearSprite = createSprite(200,4000,50,50);
    bearSprite.visible = false;

    bearSprite2 = createSprite(300,4000,50,50);
    bearSprite2.visible = false;
    bearSprite.x = bear.x;
    bearSprite.y = bear.y;
    bearSprite2.x = bear2.x;
    bearSprite2.y = bear2.y;
    
  for(var z = 1650;z<1950;z = z+250){
        tree19 = createSprite(4850,z,100,100);
       tree19.addImage(treeImg);
        tree19.scale = 0.05;
  }
    
  for(var c = 150;c<4900;c = c+350){
        tree1 = createSprite(c,1400,50,50);
        tree1.addImage(treeImg);
        tree1.scale = 0.05;
  }

  for(var i =500;i<5000;i = i+350){
        tree18 = createSprite(i,2090,450,50);
        tree18.addImage(treeImg)
        tree18.scale = 0.05;
  }

  for(var p=200;p<4900;p = p+350){
      tree21 = createSprite(p,200,50,50);
      tree21.addImage(treeImg);
      tree21.scale = 0.05
  }

  for(var r = 400;r<1200;r =r+350){
     tree22 = createSprite(2500,r,50,50);
      tree22.addImage(treeImg);
      tree22.scale = 0.05
   }

  for(var t = 400;t<1200;t = t+350){
      tree23 = createSprite(700,t,50,50);
     tree23.addImage(treeImg);
      tree23.scale = 0.05
}

  for(var a = 200;a<4900;a = a+350){
     tree24 = createSprite(a,3050,50,50);
      tree24.addImage(treeImg);
      tree24.scale = 0.05
   }
   
  for(var b = 200;b<4900;b = b+350){
   tree25 = createSprite(b,4000,50,50);
 tree25.addImage(treeImg);
    tree25.scale = 0.05
   }
    
}

function draw() {
    Engine.update(engine);
   
    background(background1Img)
    boy.checkHealthStatus();
    if(keyDown(UP_ARROW)){
        boy.y = boy.y-50
        bag10.y = bag10.y-50;
    } 

    if(keyDown(DOWN_ARROW)){
        boy.y = boy.y+50;
        bag10.y = bag10.y+50;
    }

    if(keyDown(RIGHT_ARROW)){
        boy.x = boy.x+50;
        boySprite.changeAnimation("walking",boyImg_walking);
        bag10.x = bag10.x+50;
    }

    if(keyDown(LEFT_ARROW)){
        boy.x = boy.x-50;
        bag10.x = bag10.x-50;
    }
    boySprite.x = boy.x;
    boySprite.y = boy.y;
    camera.position.x = boy.x;
    camera.position.y = boy.y;
   boySprite.collide(tree1);
  boySprite.collide(tree25);
  boySprite.collide(tree24);
  boySprite.collide(tree23);
  boySprite.collide(tree22);
  boySprite.collide(tree21);

  boySprite.collide(tree18);
  boySprite.collide(tree19);
  
  
  
 
  
  if(boy.health<50){
    if(boySprite.isTouching(health1)){
        health.pop(health1);
        boy.updateHealth(+50);
        health1.destroy();

  }
  if(boySprite.isTouching(banana)){
    health.pop(banana);
    boy.updateHealth(+50);
    banana.destroy();
  } 
  if(boySprite.isTouching(banana2)){
    health.pop(banana2);
    boy.updateHealth(+50);
    banana2.destroy();
  }
  
 
  if(boySprite.isTouching(milk1)){
    health.pop(milk1);
    boy.updateHealth(+50);
    milk1.destroy();
  }
  
  
}


if(boySprite.isTouching(swimmingClear)){
    tools.pop(swimmingClear);     
   bag.push(swimmingClear);
    swimmingClear.scale = 0.01;
   swimmingClear.position.x = bag10.x+50;
   swimmingClear.position.y = bag10.y-20;

  

}
if(bag10.isTouching(swimmingClear)){
    
    if(keyDown(UP_ARROW)){
      
        swimmingClear.y = swimmingClear.y-50;
    } 

    if(keyDown(DOWN_ARROW)){
      
     swimmingClear.y = swimmingClear.y+50;
    }

    if(keyDown(RIGHT_ARROW)){
                       
        swimmingClear.x = swimmingClear.x+50;
    }

    if(keyDown(LEFT_ARROW)){
      
        swimmingClear.x = swimmingClear.x-50;
    }
}
if(boySprite.isTouching(honey)){
    tools.pop(honey)
    bag.push(honey);    
    honey.scale = 0.03;
    honey.position.x = bag10.x+50
    honey.position.y = bag10.y-20
   

}


if(bag10.isTouching(honey)){
    
    if(keyDown(UP_ARROW)){
      
        honey.y = honey.y-50;
    } 

    if(keyDown(DOWN_ARROW)){
      
      honey.y = honey.y+50;
    }

    if(keyDown(RIGHT_ARROW)){
       
        honey.x = honey.x+50;
    }

    if(keyDown(LEFT_ARROW)){
      
        honey.x = honey.x-50;
    }

}
if(boySprite.isTouching(key4)){
    tools.pop(key4);     
   bag.push(key4);
    key4.scale = 0.04;
   key4.position.x = bag10.x+70;
   key4.position.y = bag10.y-50;

  

}
if(bag10.isTouching(key4)){
    
    if(keyDown(UP_ARROW)){
      
        key4.y = key4.y-50;
    } 

    if(keyDown(DOWN_ARROW)){
      
     key4.y = key4.y+50;
    }

    if(keyDown(RIGHT_ARROW)){
                       
        key4.x = key4.x+50;
    }

    if(keyDown(LEFT_ARROW)){
      
        key4.x = key4.x-50;
    }
}

 
if(boySprite.isTouching(basket)){
    tools.pop(basket);     
   bag.push(basket);
    basket.scale = 0.2;
   basket.position.x = bag10.x+70;
   basket.position.y = bag10.y-50;

  

}
if(bag10.isTouching(basket)){
    
    if(keyDown(UP_ARROW)){
      
        basket.y = basket.y-50;
    } 

    if(keyDown(DOWN_ARROW)){
      
     basket.y = basket.y+50;
    }

    if(keyDown(RIGHT_ARROW)){
                       
        basket.x = basket.x+50;
    }

    if(keyDown(LEFT_ARROW)){
      
        basket.x = basket.x-50;
    }
}
     if(boySprite.isTouching(door1)){
         tools.pop();
         bag.push();
         for(var item in bag){
             if(bag[item]===key4){
                 console.log("done it")
                door1.destroy();
               
             }
         }
     }
     if(boySprite.isTouching(door2)){
        tools.pop();
        bag.push();
        for(var item in bag){
            if(bag[item]===key4){
                console.log("done it")
                door2.destroy();
            }
        }
    }
    
    if(boySprite.isTouching(treasure2)){
        tools.pop();
        bag.push();
        for(var item in bag){
            if(bag[item]===key4){
                console.log("done it")
            treasure2.scale =0.1;
            treasure2.position.x = bag10.x-50;
            treasure2.position.y = bag10.y+25;
            }
        }
    }
    if(bag10.isTouching(treasure2)){
    
        if(keyDown(UP_ARROW)){
          
            treasure2.y = treasure2.y-50;
        } 
    
        if(keyDown(DOWN_ARROW)){
          
         treasure2.y = treasure2.y+50;
        }
    
        if(keyDown(RIGHT_ARROW)){
                           
            treasure2.x = treasure2.x+50;
        }
    
        if(keyDown(LEFT_ARROW)){
          
            treasure2.x = treasure2.x-50;
        }
    }
    //pacifying the bear;
    if(boySprite.isTouching(bearSprite)){

         for(var item in bag){

             if (bag[item] ===honey){

                 bear.mood = "calm"
                
             }
             
         }
             if(bear.mood==="attack"){

              boy.updateHealth(-5);

             }
     }

    //increasing healht on touching healht;

          
        
       for(var i in danger){

  
    if(boySprite.isTouching(danger[i])){

         boy.updateHealth(-5);
         
        
    }
   

}
     bear2.display();
     bear.display();
  drawSprites();
}

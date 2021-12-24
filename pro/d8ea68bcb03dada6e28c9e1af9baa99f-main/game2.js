var background;
var soldier;
var enemy;
var gameState="start";
var life=3;
function preload(){
background1=loadImage("bg1.jpeg");
bg2=loadImage("bg2.jpeg");
soldierImg=loadImage("soldier.gif");
enemyImg1=loadImage("enemy1.gif");
background2=loadImage("background 2.jpeg");
background3=loadImage("background 3.jpeg");
background4=loadImage("background 4.jpeg");
background5=loadImage("background 5.jpeg");
background6=loadImage("background 6.jpeg");
fire=loadImage("ab2gif");
enemyPower=loadImage("enemyPower.gif");
water=loadImage("ab3.gif");
lightning=loadImage("ab4.gif");
powerUps=loadImage("ab.gif");
gameover=loadImage("game over.png");
lifeImg=loadImage("heart.gif");
//life=loadImage("heart.gif");
}

function setup(){
createCanvas(windowWidth,windowHeight);
bg=createSprite(windowWidth/2,height/2);
bg.addImage("background",background1);
bg.scale=5;
bg.width=2000;
bg.velocityX=-2
//bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
soldier=createSprite(windowWidth/2,windowHeight/2+300);
soldier.addImage(soldierImg);

start=createSprite(windowWidth/2,windowHeight/2);
enemyGroup=new Group();
a=createSprite(0,windowHeight/2,5,windowHeight);
a.visible=true;
power1Group=new Group();
power2Group=new Group();
enemyPt2Group=new Group();
enemyPt3Group=new Group();
Life1=createSprite(50,50);
Life1.addImage(lifeImg);
Life1.scale=0.15;
Life2=createSprite(115,50);
Life2.addImage(lifeImg);
Life2.scale=0.15;
Life3=createSprite(180,50);
Life3.addImage(lifeImg);
Life3.scale=0.15;
}

function draw(){
background(background1);
drawSprites();
if(bg.x===width/4){
    bg.x=1000;
}
if(gameState==="start"){
    clues();
  system = new System()
  security = new Security()
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score,displayWidth/2 , 50);
  logo.visible=false
  if(score === 4) {
    clear()
    background(bg)
    fill("White")
    textSize(40);
    score=0
    text("Welcome to next level",displayWidth/2-100, displayHeight-200);
    gameState=2
}
}else if(gameState===2){
    background(bg2)
  
  cl1=createSprite(100,300,20,20)
  cl1.addImage(climage)
  cl1.scale=0.05
  if(mousePressedOver(cl1)){
    cl1.scale=1
    cl1.x=displayWidth/2
    cl1.y=displayHeight/2
    this.button1 = createButton('1');
    this.button1.position(displayWidth-100,150);
    this.button1.style('background', 'lightgrey');    

    
    this.button2 = createButton('2');
    this.button2.position(displayWidth-100,250);
    this.button2.style('background', 'lightgrey');

      

    this.button3 = createButton('3');
    this.button3.position(displayWidth-100,350);
    this.button3.style('background', 'lightgrey'); 

     

    this.button4 = createButton('4');
    this.button4.position(displayWidth-100,450);
    this.button4.style('background', 'lightgrey'); 
    this.button3.mousePressed(() => {
      this.button1.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          score++;
                  gameState=3
  });
   
  }
}
else if(gameState===3){
    bg.addImage("background",bg2);
    bg.changeImage("background",bg2)
    soldier.x=350;
    start.visible=false;
    spowers()
    enemy();
    enemyPt2();
    enemyPt3();
    soldier.y=mouseY;
    if(enemyGroup.isTouching(a)){
        life=life-1;
        console.log("hello");
    }
    if(enemyGroup.isTouching(power1Group)||enemyGroup.isTouching(power2Group)){
        enemyGroup.destroyEach();
        power1Group.destroyEach();
        power2Group.destroyEach();
    }
    if(enemyPt2Group.isTouching(power1Group)||enemyPt2Group.isTouching(power2Group)){
        enemyPt2Group.destroyEach();
        power1Group.destroyEach();
        power2Group.destroyEach();
    }
    if(enemyPt3Group.isTouching(power1Group)||enemyPt3Group.isTouching(power2Group)){
        enemyPt3Group.destroyEach();
        power1Group.destroyEach();
        power2Group.destroyEach();
    }
if(life===0){
    soldier.destroy();
    gameState= "END";
    var GameOver= createSprite(windowWidth/2,windowHeight/2)
    GameOver.addImage(gameover);
    GameOver.scale=0.8;
}
if(frameCount===500){
    gameState="Level ";
}
if(gameState==="Level 3"){
    console.log("Welcome to Level 3");
    
}
}
if(mousePressedOver(start)){
    console.log("start the game");
    gameState="play"
}

console.log(frameCount)
}

function enemy(){
    if(frameCount%50===0){
    enemy1=createSprite(windowWidth-200,random(100,windowHeight-200));
    enemy1.addImage(enemyImg1);
    enemy1.scale=0.9;
    enemy1.velocityX=-10;
    enemyGroup.add(enemy1);
    
    }
}

function enemyPt2(){
    if(frameCount%100===0){
    enemy2=createSprite(windowWidth-200,random(100,windowHeight-200));
    enemy2.addImage(enemyImg1);
    enemy2.scale=0.9;
    enemy2.velocityX=-10;
    enemyPt2Group.add(enemy2);
    
    }
}

function enemyPt3(){
    if(frameCount%20===0){
    enemy3=createSprite(windowWidth-200,random(100,windowHeight-200));
    enemy3.addImage(enemyImg1);
    enemy3.scale=0.9;
    enemy3.velocityX=-10;
    enemyPt3Group.add(enemy3);
    
    }
}
function spowers(){
    if(keyDown("space")){
        var power1=createSprite(450,windowHeight/2+200)
        power1.addImage(fire);
        power1.scale=1/8
        power1.velocityX=10;
        
        power1.y=soldier.y;
        power1Group.add(power1);
    }
    if(keyDown("RIGHT_ARROW")&&gameState==="Level 2"){
    var power2=createSprite(450,windowHeight/2+200)
    power2.addImage(water);
    power2.scale=1/8
    power2.velocityX=10;
   
    power2.y=soldier.y;
    power2Group.add(power2);
    }
    /*if (keyDown("DOWN_ARROW")){
        var powerUp=createSprite(450,windowHeight/2+200)
    powerUp.addImage(powerUps);
    powerUp.scale=1/8
    powerUp.velocityX=3;
    powerUp.y=soldier.y;
    }*/
}

function epowers(){
    var power= createSprite(windowWidth/2,windowHeight/2+100);
    power.addImage(enemyPower);
    power.scale=1/8
    power.velocityX=-3
    power.velocityY=5;
    var power3=createSprite(450,windowHeight/2+200)
    power3.addImage(lightning);
    power3.scale=1/8
    power3.velocityX=3;
    power3.velocityY=-5;
}

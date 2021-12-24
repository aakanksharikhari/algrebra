var bg,bg2,form,system,code,security;
var score=0;
var count=0;
var gameState=1
function preload() {
  bg = loadImage("entry.jpg");
  bg2 = loadImage("new.gif")
  bg3 = loadImage("bg3.jpg")
  climage = loadImage("cl1.png")
  climage2 = loadImage("q3.jpg")
  d2image = loadAnimation("1.png","2.png","3.png","4.png","5.png")
  eimage=loadImage("12.png.gif")
  e2image=loadImage("e2.gif")
  
  redImage=loadImage ("g1.png");
  greenImage=loadImage ("g2.png");
  pinkImage=loadImage ("g3.png");
  blueImage=loadImage ("g4.png");
  arrow_img=loadImage ("12.png.gif");
  GameI=loadImage("GameOver.jpeg")
  music1=loadSound ("music1.wav");
  music2=loadSound ("music2.wav");
  music3=loadSound ("music3.wav");
  music4=loadSound ("music4.wav");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  cl1=createSprite(random(100,400),random(100,400),20,20)
  cl1.addImage(climage)
  cl1.scale=0.05
  cl1.visible=false
  cl2=createSprite(random(300,400),random(100,400),20,20)
  cl2.addImage(climage2)
  cl2.scale=0.05
  cl2.visible=false
  d=createSprite(100,100,500,500)
  d.addAnimation("d2",d2image)
  d.visible=false
  arrowGroup= new Group();
  blueG= new Group();
  pinkG= new Group();
  greenG= new Group();
  redG= new Group();
  
  system = new System()
  security = new Security()
  
  }

function draw() {
  
 if(gameState===1){
  background(bg)
   level1();
 }else if(gameState===2){
   level2()
 }else if(gameState===3){
   level4()
 }else if(gameState===4){
  level3()
}
 
  drawSprites()
}

function level1(){
  clues();
  music2.play();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score,width/2 , 50);

  if(score === 4) {
    clear()
    background(bg2)
    
    gameState=2
  }else if(score === 5){
    GameOv()
   
  }
}
function level2(){
  background(bg2)
  music3.play();
  
  cl1.visible=true
  
   if(score === 5){
    GameOv()
   
  }
  if(mousePressedOver(cl1)){
    cl1.scale=0.5
    cl1.x=width/2
    cl1.y=height/2
    this.button1 = createButton('1');
    this.button1.position(width-100,150);
    this.button1.style('background', 'lightgrey'); 
    this.button1.mousePressed(() => {
      this.button1.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          score=5;
          cl1.destroy()       
  });   

    
    this.button2 = createButton('2');
    this.button2.position(width-100,250);
    this.button2.style('background', 'lightgrey');
    this.button2.mousePressed(() => {
      this.button1.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          score=5;
          cl1.destroy()     
  });
      

    this.button3 = createButton('3');
    this.button3.position(width-100,350);
    this.button3.style('background', 'lightgrey'); 
    
     

    this.button4 = createButton('4');
    this.button4.position(width-100,450);
    this.button4.style('background', 'lightgrey'); 
    this.button4.mousePressed(() => {
      this.button1.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          score=5;
          cl11.destroy()       
  });
    this.button3.mousePressed(() => {
      this.button1.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          
                  gameState=3
                  cl1.destroy()
  });
   
  }
}


function level4(){
  background(bg2)
  music3.play();
  cl2.visible=true

  if(score === 5){
    GameOv()
   
  }
   if(mousePressedOver(cl2)){
    cl2.scale=0.5
    cl2.x=width/2
    cl2.y=height/2
    this.button1 = createButton('1');
    this.button1.position(width-100,150);
    this.button1.style('background', 'lightgrey');   
    this.button1.mousePressed(() => {
      this.button1.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          
                  gameState=4
                  cl2.destroy()
  }); 
    
    
    this.button2 = createButton('2');
    this.button2.position(width-100,250);
    this.button2.style('background', 'lightgrey');
    this.button1.mousePressed(() => {
      this.button2.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          score=5;
          cl2.destroy()         
  });
      

    this.button3 = createButton('3');
    this.button3.position(width-100,350);
    this.button3.style('background', 'lightgrey'); 
    this.button3.mousePressed(() => {
      this.button1.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          score=5;
          cl2.destroy()      
  });
     

    this.button4 = createButton('4');
    this.button4.position(width-100,450);
    this.button4.style('background', 'lightgrey'); 
    this.button4.mousePressed(() => {
      this.button1.hide();
      this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          score=5;
          cl2.destroy()    
  });
    
   
  }
}
function level3(){
  background(bg3)
  d.visible=true
  music4.play();
  if(score === 5){
    GameOv()
    blueG.destroyEach ();
    redG.destroyEach ();
    arrowGroup.destroyEach ();
    greenG.destroyEach ();
    pinkG.destroyEach();
    d.destroy()
  }
  if (arrowGroup.isTouching (blueG)) {
    blueG.destroyEach ();
    arrowGroup.destroyEach ();
    count=count+1;
  }
  
  if (arrowGroup.isTouching (redG)) {
    redG.destroyEach ();
    arrowGroup.destroyEach ();
    score= 15;
  }
  
  if (arrowGroup.isTouching (greenG)) {
    greenG.destroyEach ();
    arrowGroup.destroyEach ();
    count=count+1;
  }
  
  if (arrowGroup.isTouching (pinkG)) {
    pinkG.destroyEach();
    arrowGroup.destroyEach();
    score= 5;
  }
  
    if (keyDown("space")) {
    var temp_arrow = CreateArrow();
    temp_arrow.addImage(arrow_img);
     temp_arrow.y = d.y;
  }
  if(count===10){
    text("congrats")
  }
  var balloon_count= Math.round(random (1,4));
  if(frameCount % 80 == 0){
     if (balloon_count==1){
       balloonRed();
  } 
  
  else if (balloon_count==2) {
    balloonGreen();
  }
  
  else if (balloon_count==3) {
    balloonPink();
  }
  
  else{
    balloonBlue();
  }
 }
  
  
  
   if(keyDown("up")){
      d.velocityY=-2
      
      }else  if(keyDown("down")){
        d.velocityY=2
        
        }
        else{
          d.velocityX=0
          d.velocityY=0
        }
 
}
function balloonRed(){
  var redBalloon= createSprite (width, Math.round(random (100, height-100)), 10, 10);
  redBalloon.addImage (redImage);
  redBalloon.scale= 0.2;
   redBalloon.velocityX=-3;
   redBalloon.lifetime=1000;
   
   redG.add (redBalloon);
 }
 
   
   function balloonGreen(){
   var greenBalloon= createSprite (width, Math.round(random (100, height-100)), 10, 10);
     greenBalloon.addImage (greenImage);
     greenBalloon.scale=0.2;
     greenBalloon.velocityX=-3;
     greenBalloon.lifetime=1000;
     
     greenG.add(greenBalloon);
   }
   
 
 function balloonPink(){
   var pinkBalloon= createSprite (width, Math.round(random (100, height-100)), 10, 10);
   pinkBalloon.addImage (pinkImage);
   pinkBalloon.velocityX=-3;
   pinkBalloon.lifetime=1000
   pinkBalloon.scale=0.2;
   
   pinkG.add(pinkBalloon);
 }
 
 
 function balloonBlue(){
   var blueBalloon=createSprite (width, Math.round(random (100, height-100)), 10, 10);
   blueBalloon.addImage (blueImage);
   blueBalloon.scale=0.2;
   blueBalloon.velocityX=-3;
   blueBalloon.lifetime=1000;
   
   blueG.add(blueBalloon);
 }
 //creating the arrows
 function CreateArrow(){
   
   arrow= createSprite(350, 100, 10, 10);
   arrow.velocityX = 6;
   arrow.velocityY = 2;
   arrow.scale = 0.1;
   arrowGroup.add(arrow);
   return arrow;
   
   
 }

 function GameOv(){
  background(GameI)
  
 
  
 }
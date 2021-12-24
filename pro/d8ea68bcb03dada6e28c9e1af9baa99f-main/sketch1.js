var bg,bg2,form,system,code,security,l,clue1;
var score=0;
gameState=1
var cl1
function preload() {
  bg = loadImage("entry.jpg");
  bg2 = loadImage("level2.jpg")
  climage = loadImage("cl1.png")
  climage2 = loadImage("cl2.jpg")
  p1=loadAnimation("1.png","2.png","3.png","4.png","5.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
 
  
}

function draw() {
  background(bg)
   
  
  if(gameState===1){
    background(bg)
   level1()

    
  }else if(gameState===2){
    background(bg2)
    level2()
  }
  drawSprites()
}

function level1(){
  
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
}

function level2(){
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

function level3(){
  background(bg);
  var player=createSprite(100,displayHeight/2,20,20)
  player.addAnimation("p1",p1)
  if(frameCount%100===0){
    var e1=createSprite(displayWidth+10,random(20,displayHeight-20),20,20)
    e1.velocityX=-10
  }

}
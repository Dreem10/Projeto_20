var bgImg;
var cat;
var mouse;

function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("garden.png");
    catimg1 = loadImage("cat1.png");
    mouseimg1 = loadImage("mouse1.png");
    catimg2 = loadImage("cat2.png, cat3.png, cat.png4");
    mouseimg2 = loadImage("mouse2.png, mouse3.png, mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    cat = createSprite(870, 600);
    cat.addAnimation("gatoSentado", catimg1);
}

function draw() {

    background(255);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("útimaImagemGato", catimg3);
        cat.x = 300;
        cat.scale=0,2;
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("ratoProvocando", mouseimg2);
      mouse.changeAnimation("ratoProvocando");
      mouse.frameDelay = 25;
      cat.velocity = 5;
  }
}
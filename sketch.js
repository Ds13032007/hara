const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var bgSprite;

function preload(){
    backgroundImg = loadImage("Spr/BG.jpg")
}
                                                                                              
function setup(){
                    
    var canvas = createCanvas(1500,800);
    console.log(backgroundImg.width);
     bgSprite = createSprite(850,400)
     bgSprite.addImage("img",backgroundImg);
    engine = Engine.create();
    world = engine.world;

}
function draw()
{
    
    //background(backgroundImg);
    bgSprite.velocityX = -2
    if (bgSprite.x < 300){
        bgSprite.x =500
    }
    

    drawSprites();  
}
var t;
var t_i;
var d_i;
var d;
var dg;
var c;
var c_i;
var cg;
var g;
var g_i;
var ib;
var ibg;
var s_s;
var gs = 0;

function preload(){
  t_i = loadImage("tower.png");
  d_i = loadImage("door.png");
  c_i = loadImage("climber.png");
  g_i = loadImage("ghost-standing.png");
  s_s = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  s_s.loop();
  t = createSprite(300,300);
  t.addImage("tower",t_i);
  t.velocityY = 1;
  g = createSprite(200,200,50,50);
  g.scale = 0.3;
  g.addImage("ghost", g_i);
  dg = new Group();
  cg = new Group();
  ibg = new Group();
}

function cn(){
   if(keyDown("left_arrow")){
      g.x = g.x - 3;
    }
    
    if(keyDown("right_arrow")){
      g.x = g.x + 3;
    }
    
    if(keyDown("space")){
      g.velocityY = -10;
    }
}

function dr(){
  if(frameCount%240===0){
    d = createSprite(200, -50);
    c = createSprite(200,10);
    ib = createSprite(200,15);
    ib.width = c.width;
    ib.height = 2;
    d.x = Math.round(random(120,400));
    c.x = d.x;
    ib.x = d.x;
    d.addImage("door", d_i);
    c.addImage("climber", c_i);
    d.velocityY = 1;
    c.velocityY = 1;
    ib.velocityY = 1;
    g.depth = d.depthl
    g.depth +=1;
    d.lifetime = 800;
    c.lifetime = 800;
    ib.lifetime = 800;
    dg.add(d);
    ib.debug = true;
    cg.add(c);
    ibg.add(ib);
  }
}

function draw(){
  background("black");
  if (gs === 0) {
    cn();
    
    g.velocityY = g.velocityY + 0.8
    
    if(t.y > 400){
      t.y = 300
    }
    
    dr();
    
    if(cg.isTouching(g)){
      g.velocityY = 0;
    }
    
    if(ibg.isTouching(g) || g.y > 600){
      g.destroy();
      gs = 1 ;
    }
    
    drawSprites();
  }
  
  if (gs === 1){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 210,300)
  }

}



//my matrix rain
var tgröße = 15;
var reihen = [];

function setup() {
  createCanvas(innerWidth, innerHeight-4);
  for(var i=0;i*tgröße<width;i++){
    reihen.push(new Reihe(i));
    reihen[i].ini();
  }
}

function draw() {
  background(0);

  for(var i=0;i<reihen.length;i++){
    reihen[i].update();
    reihen[i].show();
    if(reihen[i].flag == -1){
      reihen.splice(i,1);
      console.log("hi");
    }
  }
}

function Zeichen(x,y,num) {
  this.x = x;
  this.duh = y;
  this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));

  this.show = function(){
    num==0?fill(150,255,150):fill(0,255,0);
    frameCount%round(random(60*0.5,60*20))==0?this.value = String.fromCharCode(0x30A0 + round(random(0, 96))):0;
    round(random(0,10000))==1?this.value = round(random(0,9)):0;
    if(num==0 && frameCount%round(random(72))==0){
      this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
    }
    textSize(tgröße);
    this.y = reihen[y].y-num*tgröße;
    text(this.value,this.x,this.y);
  }
}

function Reihe(x){
  this.x = x*tgröße;
  this.y = -10;
  this.länge = round(random(6,70));
  this.parts = [];
  this.speed = random(15,70)/10;
  this.flag = false;

  this.ini = function(){

    for(var i=0;i<this.länge;i++){
      this.parts.push(new Zeichen(this.x,x,i));
      this.flag = true;
    }
  }

  this.show = function(){

    for(var i=0;i<this.parts.length;i++){
      this.parts[i].show();
    }
  }

  this.update = function(){
    this.y+=this.speed;

    if(this.flag == false){
      this.ini();
    }

    if(this.y-this.länge*tgröße>height){
      this.parts = [];
      reihen.splice(x,1,new Reihe(x));
    }
  }
}

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
    reihen[i].show();
  }
}

function Zeichen(x,y,num) {
  this.x = x;
  this.duh = y;

  this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));

  this.show = function(){
    num==0?fill(130,255,130,):fill(0,255,0);
    frameCount%round(random(60*0.5,60*20))==0?this.value = String.fromCharCode(0x30A0 + round(random(0, 96))):0;
    round(random(0,10000))==1?this.value = round(random(0,9)):0;
    textSize(tgröße);
    this.y = reihen[y].y-num*tgröße;
    text(this.value,this.x,this.y);
  }

}

function Reihe(x){
  this.x = x*tgröße;
  this.y = 0;
  this.länge = round(random(6,66));
  this.parts = [];
  this.speed = random(1,50)/10;

  this.ini = function(){

    for(var i=0;i<this.länge;i++){
      this.parts.push(new Zeichen(this.x,x,i));
    }
  }

  this.show = function(){
    for(var i=0;i<this.parts.length;i++){
      this.parts[i].show();
    }
    this.y+=this.speed;
  }



}

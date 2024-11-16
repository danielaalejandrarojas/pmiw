class Shrek {
  constructor() {
    this.posX = 320;
    this.posY = 390;
    this.veloz = 2
    this.img = loadImage('data/Shrek.png');
  }

reinicia(){
  this.crear();
  this.camina();
}
  
  crear() {
    push();
    image(this.img, this.posX, this.posY, 80, 80);
    pop();
  }

  camina() {
    if (keyIsPressed && key == 'a') {
      this.posX -= 2*this.veloz;
    }
    if (keyIsPressed && key == 'd') {
      this.posX += 2*this.veloz;
    }
  }
  
}//CORECHETE OB SHREK

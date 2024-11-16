class Girasol {
  constructor() {
    this.movX = 0;//random(10,width-100);
    this.movY = 0;//random(0,390);
    this.reiniciarcaer();
    this.velocidad = 2;
    this.img = loadImage('data/girasol.png');
    this.colision = true;
  }

  //metodos:
  actual() {
    //if(this.colision){
    this.caer();
    this.dibujar();
    //}
  }

  dibujar() {
    push();
    image(this.img, this.movX, this.movY, 60, 60);
    pop();
  }

  caer() {
    //let movx = this.movX +=1*this.velX;
    this.movy = this.movY +=1*this.velocidad;
    if ( this.movY>height) {
      this.reiniciarcaer();
    }
  }

  reiniciarcaer() {
    this.movX = random(0, width-150);
    this.movY = -100-random(100, 400);
  }

  //colision() {
  //  if (this.colision) {
  //    if (dist(this.movX, this.movY) < 50) {
  //      this.reiniciarcaer();
  //      this.colision = false;
  //      return true;
  //    } else {
  //      return false;
  //    }
  //  }
  //}
}

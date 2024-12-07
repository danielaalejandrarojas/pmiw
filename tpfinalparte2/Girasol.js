class Girasol {
  constructor(mx) {
    this.movX = mx; //300;
    this.movY = 0;
    this.tam = 60;
    this.velocidad = 2;
    this.img = loadImage('data/girasol.png');
    this.colision = true;
  }

  //metodos:
  actual() {
    if (this.colision) {
      this.caer();
      this.dibujar();
    }
  }

  dibujar() {
    push();
    image(this.img, this.movX, this.movY, this.tam, this.tam);
    pop();
  }

  caer() {
    this.movy = this.movY +=1*this.velocidad;
    if ( this.movY>height) {
      this.reiniciarcaer();
    }
  }

  reiniciarcaer() {
    this.movX = random(0, width-150);
    this.movY = -100-random(100, 500);
  }

  colisiona(x, y) {
    if (this.colision) {
      if (dist(this.movX, this.movY, x, y) < this.tam-10) {
        this.reiniciarcaer();
        this.colision = false;
        return true;
      } else {
        return false;
      }
    }
  }

  reinposInicial(mx) {
    this.movX = mx;
    this.movY = 0;
    this.tam = 60;
    this.velocidad = 2;
    this.colision = true;
  }
}

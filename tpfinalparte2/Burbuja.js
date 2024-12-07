class Burbuja {
  constructor(x) {
    this.X = x;
    this.Y = -10;
    this.tam = 60;
    this.velocidad = 2;
    this.imgn = loadImage('data/burbuja.png');
    this.choca = true;
  }

  aparece() {
    if (this.choca) {
      this.cae();
      this.dibujo();
    }
  }

  dibujo() {
    push();
    image(this.imgn, this.X, this.Y, this.tam, this.tam);
    pop();
  }

  cae() {
    this.y = this.Y +=1*this.velocidad;
    if ( this.Y>height) {
      this.reiniciarcaida();
    }
  }

  reiniciarcaida() {
    this.X = random(50, width-40);
    this.Y = -100-random(100, 400);
  }

  colisionar(x, y) {
    if (this.choca) {
      if (dist(this.X, this.Y, x, y) < this.tam-10) {
        this.reiniciarcaida();
        this.choca = false;
        return true;
      } else {
        return false;
      }
    }
  }

  reiniciaPosicion(x) {
    this.X = x;
    this.Y = -10;
    this.tam = 60;
    this.velocidad = 2;
    this.choca = true;
  }
}

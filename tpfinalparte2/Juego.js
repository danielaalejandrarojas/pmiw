class Juego {
  constructor() {
    //propiedades para el juego
    this.vida = 3;
    this.contadorflor = 0; //puntos
    this.personaje = new Shrek();

    //propiedades para girasol y enemigo
    this.enemigo = [];
    this.flor = [];
    this.cant = 15;
    for (this.i=0; this.i < this.cant; this.i++) {
      //llamo al constructur de mi objeto
      this.flor[this.i] = new Girasol(random(-10, 650));
      this.enemigo[this.i] = new Burbuja(random(0, 200));
    }
  }

  actualizar() {
    //metodo girasol
    for ( this.e=0; this.e <this.flor.length; this.e++) {
      this.flor[this.e].colisiona( this.personaje.posX, this.personaje.posY);
      this.flor[this.e].actual();

      if ( this.flor[this.e].colisiona( this.personaje.posX, this.personaje.posY) ) {
        this.contadorflor ++;
      }
    }
    //metodo enemigo
    for ( this.a=0; this.a <this.enemigo.length; this.a++) {
      this.enemigo[this.a].colisionar( this.personaje.posX, this.personaje.posY);
      this.enemigo[this.a].aparece();

      if (this.enemigo[this.a].colisionar( this.personaje.posX, this.personaje.posY) ) {
        this.vida --;
      }
    }

    this.personaje.vive();
    this.muestropuntos();
    this.muestrovidas();
  }//cactuzar

  muestropuntos() {
    push();
    fill(255);
    textSize(15);
    text("puntos", 50, 30);
    text(this.contadorflor, 50, 50);
    pop();
  }

  muestrovidas() {
    push();
    fill(255);
    textSize(15);
    text("vidas", 590, 32);
    text(this.vida, 590, 50);
    pop();
  }

  ganar() {
    if (this.contadorflor >= 10) {
      return true;
    } else {
      return false;
    }
  }

  perder() {
    if (this.vida == 0) {
      return true;
    } else {
      return false;
    }
  }

  reiniciar() {

    for (this.i=0; this.i < this.cant; this.i++) {
      this.flor[this.i].reinposInicial(random(-10, 650));
      this.enemigo[this.i].reiniciaPosicion(random(0, 200));
    }

    this.contadorflor = 0;
    this.cant = 15;
    this.vida = 3;
  }
}//ccons

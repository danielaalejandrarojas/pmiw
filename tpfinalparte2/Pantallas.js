class Pantallas {
  constructor() {
    this.game = new Juego();
    this.musica = document.getElementById("musica");
    this.estado = "inicio";
  }

  realizar() {
    if (this.estado==="inicio") {
      pantallaInicio(0);
    }
    if (this.estado==="jugando") {
      pantallaJuego(4);
    }

    if (this.estado==="creditos") {
      pantalla(3, 4, 5);
    }

    if (this.estado==="jugando") {
      this.game.actualizar();
    }

    if (this.estado==="ganar") {
      pantalla(1, 0, 1);
      this.game.reiniciar();
    }

    if (this.estado==="perder") {
      pantalla(2, 2, 3);
      this.game.reiniciar();
    }

    console.log(this.estado);
  }

  cliquea() {
    // eventos musica
    if (this.estado==="inicio") {
      if (colisionBoton(380, 400, 90, 40)) { // BON
        this.musica.play();
      } else if ( colisionBoton(380, 450, 90, 40) ) { //BOF
        this.musica.pause();
      }
    }
   //eventos pantallas
    if (this.estado==="inicio") {
      if (colisionBoton(270, 400, 90, 40)) {
        this.estado = "jugando";
      } else if (colisionBoton(270, 450, 90, 40)) {
        this.estado = "creditos";
      }
    } else if (this.estado==="creditos") {
      if (colisionBoton(width/2, 420, 90, 40)) {
        this.estado = "inicio";
      }
    }

    if (this.estado==="ganar") {
      if (colisionBoton(width/2, 420, 90, 40)) {
        this.estado = "inicio";
      }
    } else if (this.estado==="perder") {
      if (colisionBoton(width/2, 420, 90, 40)) {
        this.estado = "inicio";
      }
    }
  }//cclik

  actualizar() {

    if (this.game.ganar()) {
      this.estado="ganar";
    }
    if (this.game.perder()) {
      this.estado="perder";
    }
  }
}//cpant

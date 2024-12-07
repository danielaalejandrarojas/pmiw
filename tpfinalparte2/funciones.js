//funcion para pantalla inicio
function pantallaInicio(a) {
  image(img[a], 0, 0);
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text("Instrucciones:\n Deberas recolectar 10 girasoles. \n Pero cuidado! Si tocas una burbuja tu vida será descontada!.", 320, 150);
  text("Pulsa las teclas *a y *d para moverte de izquierda a derecha.\n *Desacativa las mayusculas", 320, 250);

  push();
  textSize(12);
  dibujaBoton("EMPEZAR", 270, 400, 90, 40);
  pop();

  push();
  textSize(12);
  dibujaBoton("CREDITOS", 270, 450, 90, 40);
  pop();

  push();
  textSize(12);
  dibujaBoton("MUSICA ON", 380, 400, 90, 40);
  pop();

  push();
  textSize(12);
  dibujaBoton("MUSICA OFF", 380, 450, 90, 40);
  pop();
}

//pantalla para juego
function pantallaJuego(im) {
  image(img[im], 0, -50);
}

function pantalla(b, c, d) {
  image(img[b], 0, 0);
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(texto[c], 320, 150);
  text(texto[d], 320, 200);

  push();
  textSize(12);
  dibujaBoton("Volver", width/2, 420, 90, 40);
  pop();
}

function dibujaBoton(txt, x, y, w, h ) {
  //dibuja un boton centrado:
  push();
  rectMode(CENTER);
  //evaluo para crear efecto rolover:
  if ( colisionBoton( x, y, w, h ) ) {
    fill(247, 192, 7);
  } else {
    fill(237, 133, 5);
  }
  rect(x, y, w, h);
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}

function colisionBoton( x, y, w, h ) {
  //evalua colision
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

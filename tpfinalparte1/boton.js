function dibujaBoton(txt, x, y, w, h ) {
  //dibuja un boton centrado:
  push();
  rectMode(CENTER);
  //evaluo para crear efecto rolover:
  if ( colisionBoton( x, y, w, h ) ) {
    fill(20, 200, 0);
  } else {
    fill(185, 69, 69);
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

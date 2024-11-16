//funcion para pantalla inicio
function pantallaInicio(a) {
  image(img[a], 0, 0);
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text("Instrucciones: \n Deberas recolectar 20 girasoles en 50 segundos. \n Pero cuidado! Si tocas una varita tu tiempo será descontado!.", 320, 150);
  push();
  //textFont(fuente);
  textSize(12);
  dibujaBoton("EMPEZAR", width/2, 400, 90, 40);
  pop();
}

//pantalla para juego
function pantallaJuego(){
  background(112,170,138);
  text("el juego",320,150);
  j.actualizar();
  //tiempo.reiniciaCuenta();
  //tiempoJuego(contador);
  
  //push();
  ////textFont(fuente);
  //dibujaBoton("volver", width/2, height*0.75, 200, 40);
  //pop();
}

function pantalla(b,c,d) {
  image(img[b], 0, 0);
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text([c],320, 150);
  text([d],320, 150);
  push();
  //textFont(fuente);
  textSize(12);
  dibujaBoton("volver", width/2, 400, 90, 40);
  pop();
}

//function tiempoJuego(e){
//  push();
//  frameRate(1.5);
//  fill(0);
//  textSize(25);
//  //textAlign(RIGHT);
//  text(e,590,50);
//  pop();
//}


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

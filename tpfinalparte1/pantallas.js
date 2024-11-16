function pantallainicio() {
  push();
  image(img[0], 0, 0, 640, 680);
  fill(255);
  textFont(fuente);
  dibujaBoton("EMPEZAR", width/2, height*0.75, 200, 40);
  dibujaBoton("TITULOS", width/2, height*0.85, 200, 40);
  dibujaBoton("musica ON", width/2-200, height*0.75+50, 150, 40);
  dibujaBoton("musica OFF", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantallaSig(a, b) {
  image(img[a], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[b], 320, 150);
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantallaOpciones(i, tx) {
  image(img[i], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[tx], 320, 150);
}

function pantallaFinal(fondo, t) {
  image(img[fondo], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[t], 320, 150);
  push();
  textFont(fuente);
  dibujaBoton("FIN", 320, height*0.75+50, 150, 40);
  pop();
}

function pantallaCreditos() {
  image(img[21], -100, 0);
  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text("Creditos", 300, 110);
  text("Alumnos", 162, 159);
  text("Daniela A Rojas, JCarlos Villalba Mallorquin", 450, 159);
  text("Imagenes", 160, 189);
  text("IA,Google", 349, 189);
  pop();

  push();
  textFont(fuente);
  dibujaBoton("Volver", 320, 360, 150, 40);
  pop();
}

function rectparatexto() {
  fill(0, 100);
  rectMode(CENTER);
  rect(320, 150, 600, 130);
}

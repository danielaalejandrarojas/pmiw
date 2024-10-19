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

function pantallaUno() {
  
  push();
  image(img[1], 0, 0, 640, 680);

  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text("Shrek y Burro emprenden la búsqueda de la princesa Fiona a pedido de\n Lord Farquaad a cambio de recuperar el pantano", 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla2() {
  image(img[2], 0, 0);
  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text(textos[0], 320, 150);
  dibujaBoton("A: Distraer a Burro", width/2-200, height*0.75+50, 150, 40);
  dibujaBoton("B: Respetar su decision", width/2, height*0.75+50, 150, 40);
  dibujaBoton("C: Ayuda magica", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla3() {
  image(img[3], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[1], 320, 150);
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla4() {
  push();
  image(img[4], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[2], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla5() { // desde acá
  push();
  image(img[5], 0, 0, 640, 680);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[3], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla6() {
  push();
  image(img[6], 0, 0, 640, 680);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text("Shrek lleva a la Dragona a una trampa.\nLe coloca un candelabro en el cuello y la encadena en el castillo.\nLogran escapar con vida", 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla7() {
  push();
  image(img[7], 0, 0, 640, 680);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[5], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("FIN", width/2+200, height*0.75+50, 150, 40); // cambiar esto
  pop();
}

function pantalla8() {
  push();
  image(img[8], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[6], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla9() {
  image(img[9], 0, 0);
  rectparatexto();
  push();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text(textos[7], 320, 150);
  dibujaBoton("A: Utilizar un arbol", width/2-200, height*0.75+50, 150, 40);

  dibujaBoton("B: Volver otro dia", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla10() {
  image(img[10], 0, 0);

  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text(textos[8], 320, 150);
  pop();

  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla11() {
  image(img[11], 0, 0);

  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text(textos[9], 320, 150);
  pop();

  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla12() {
  image(img[12], 0, 0);

  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text(textos[10], 320, 150);
  pop();

  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla13() {
  image(img[13], 0, 0);

  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text(textos[11], 320, 150);
  pop();

  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla14() {
  image(img[14], 0, 0);

  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text(textos[12], 320, 150);
  pop();

  push();
  textFont(fuente);
  dibujaBoton("FIN", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function pantalla15() {
  image(img[15], 0, 0);
  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text("Aparece el Hada Madrina y les ofrece su ayuda.\nLes dice que puede teletransportarlos al interior del castillo.", 320, 150);
  dibujaBoton("A: Aceptan", width/2-200, height*0.75+50, 150, 40);

  dibujaBoton("B: Rechazan", width/2+200, height*0.75+50, 150, 40);
  pop();
}
function pantalla16() {
  push();
  image(img[16], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[14], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}
function pantalla17() {
  push();
  image(img[17], 0, 0, 640, 680);
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text(textos[15], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("FIN", width/2+200, height*0.75+50, 150, 40); // cambiar esto
  pop();
}
function pantalla18() {
  push();
  image(img[18], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[16], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}
function pantalla19() {
  push();
  image(img[19], 0, 0);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[17], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("SIGUIENTE", width/2+200, height*0.75+50, 150, 40);
  pop();
}
function pantalla20() {
  push();
  image(img[20], 0, 0, 640, 680);
  rectparatexto();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  text(textos[18], 320, 150);
  pop();
  push();
  textFont(fuente);
  dibujaBoton("FIN", width/2+200, height*0.75+50, 150, 40);
  pop();
}
function pantalla21() {
  image(img[21], -100, 0);

  push();
  rectparatexto();
  fill(255);
  textSize(14);
  textAlign(CENTER);
  text("Creditos", 300, 110);
  text("Alumnos", 162, 159);
  text("Daniela A Rojas, J Carlos Villalba Mallorquin", 450, 159);
  text("Imagenes", 160, 189);
  text("IA,Google", 349, 189);
  pop();

  push();
  textFont(fuente);
  dibujaBoton("Volver", width/2+200, height*0.75+50, 150, 40);
  pop();
}

function rectparatexto(){
fill(0,100);
 rectMode(CENTER);
  rect(320, 150,600,130);
}

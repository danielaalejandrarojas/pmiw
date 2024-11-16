//tpfinalparte1 pelicula: shrek
//alumnos: Daniela A Rojas (78653/5); Jean Carlos Villalba Mallorquin (88263/9) Com: 3
//link a video: https://youtu.be/k8Mho2q-2f4

let img =[];
let textos, estado, fuente;
let musica;

function preload() {

  textos= loadStrings('data/textos/textos.txt');
  for (let i = 0; i < 22; i++) {
    img[i] = loadImage('data/imagenes/img'+nf(i, 2)+'.jpg');
  }
  fuente=loadFont('data/BouwsUnc.ttf');
}

function setup() {
  createCanvas(640, 480);
  musica= document.getElementById("musica");
  estado=0;
}

function draw() {
  print("estado es "+estado);
  print(mouseX, mouseY);

  if (estado === 0) {
    pantallainicio();
  } else if (estado === 1) {
    pantallaSig(1, 0);
  } else if (estado===2) {
    pantallaOpciones(2, 1);
    dibujaBoton(textos[20], width/2-200, height*0.75+50, 150, 40);
    dibujaBoton(textos[21], width/2, height*0.75+50, 150, 40);
    dibujaBoton(textos[22], width/2+200, height*0.75+50, 150, 40);
  } else if (estado===3) {
    pantallaSig(3, 2);//p3
  } else if (estado===4) {
    pantallaSig(4, 3);//p4
  } else if (estado===5) {
    pantallaSig(5, 4);//P5
  } else if (estado===6) {
    pantallaSig(6, 5);//p6
  } else if (estado===7) {
    pantallaFinal(7, 6);   //pantalla7();
  } else if (estado===8) {
    pantallaSig(8, 7); //p8
  } else if (estado===9) {
    pantallaOpciones(9, 8);
    dibujaBoton(textos[23], width/2-200, height*0.75+50, 150, 40);
    dibujaBoton(textos[24], width/2+200, height*0.75+50, 150, 40);
  } else if (estado===10) {
    pantallaSig(10, 9); //p10
  } else if (estado===11) {
    pantallaSig(11, 10); //p11
  } else if (estado===12) {
    pantallaSig(12, 11); //p12
  } else if (estado===13) {
    pantallaSig(13, 12); //p13
  } else if (estado===14) {
    pantallaFinal(14, 13); //pantalla14();
  } else if (estado===15) {
    pantallaOpciones(15, 14);
    dibujaBoton(textos[25], width/2-200, height*0.75+50, 150, 40);
    dibujaBoton(textos[26], width/2+200, height*0.75+50, 150, 40);
  } else if (estado===16) {
    pantallaSig(16, 15); // p16
  } else if (estado===17) {
    pantallaFinal(17, 16); //pantalla17();
  } else if (estado===18) {
    pantallaSig(18, 17); //p18
  } else if (estado===19) {
    pantallaSig(19, 18); //p19
  } else if (estado===20) {
    pantallaFinal(20, 19);
  } else if (estado===21) {
    pantallaCreditos();
  }
}// corchete draw

function mousePressed() {
  // música de fondo:
  if ( estado==0) {
    if (colisionBoton(width/2-200, height*0.75+50, 150, 40)) { //botón on
      //sonidoMusica.currentTime=0;
      musica.play();
    } else if ( colisionBoton(width/2+200, height*0.75+50, 150, 40) ) { //0botón off
      musica.pause();
    }
  }//corchete musica

  if (estado === 0) {
    if (colisionBoton( width/2, height*0.75, 200, 40)) {
      estado=1;
    } else if (colisionBoton( width/2, height*0.85, 200, 40)) { // Bot creditos
      estado = 21;
    }
  } else if (estado==1) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado=2;
    }
  } else if (estado==2) {
    if (colisionBoton(width/2-200, height*0.75+50, 150, 40)) {             //botón A
      estado = 3;
    } else if (colisionBoton(width/2, height*0.75+50, 150, 40)) {         // BotB
      estado = 8;
    } else if (colisionBoton( width/2+200, height*0.75+50, 150, 40)) {   //botón c
      estado = 15;
    }
  }//hasta acá funciona
  else if (estado==3) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado=4;
    }
  } else if (estado == 4) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 5;
    }
  } else if (estado == 5 ) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 6;
    }
  } else if (estado == 6) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 7;
    }
  } else if (estado == 7) {
    if (colisionBoton(320, height*0.75+50, 150, 40)) {  // BOTON FIN
      estado = 0;
    }
  } else if (estado==8) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado= 9;
    }
  } else if (estado==9) {
    if (colisionBoton( width/2+200, height*0.75+50, 150, 40)) {//camino B
      estado = 12;
    } else if (colisionBoton( width/2-200, height*0.75+50, 150, 40)) {//camino A
      estado = 10;
    }
  } else if (estado==10) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 11;
    }
  } else if (estado==11) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 12;
    }
  } else if (estado==12) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 13;
    }
  } else if (estado==13) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 14;
    }
  } else if (estado==14) {
    if (colisionBoton(320, height*0.75+50, 150, 40)) {     // BOTON FIN
      estado = 0;
    }
  } else if (estado==15) {
    if (colisionBoton( width/2+200, height*0.75+50, 150, 40)) {     //camino B
      estado = 18;
    } else if (colisionBoton( width/2-200, height*0.75+50, 150, 40)) {   //camino A
      estado = 16;
    }
  } else if (estado==16) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado=17;
    }
  } else if (estado == 17) {
    if (colisionBoton(320, height*0.75+50, 150, 40)) {      // BOTON FIN
      estado = 0; // reinicio
    }
  } else if (estado ==18) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {  //BotSig
      estado = 19;
    }
  } else if (estado ==19) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) { //BotSig
      estado = 20;
    }
  } else if (estado == 20) {
    if (colisionBoton(320, height*0.75+50, 150, 40)) {   // BOTON FIN
      estado = 0; // reinicio
    }
  } else if (estado == 21) {
    if (colisionBoton(320, 360, 150, 40)) {    // BOTON VOLVER
      estado = 0; // reinicio
    }
  }
}// corchete mousepressed

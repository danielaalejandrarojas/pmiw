// tpfinalp2/ alumna: Daniela A Rojas/ Com:3/ tematica: Shrek1
// link a youtube:

let texto, img =[];
let j;

//variables para transicion de pantallas. comparar ambas para pantganar/perder
let estado, contador = 50;
let tiempo, cant = 3;

function preload() {
  texto= loadStrings('data/textos/textos.txt');
  
  for (let i = 0; i < 4; i++) {
    img[i] = loadImage('data/imagenes/img'+nf(i, 2)+'.jpg');
  }
}

function setup() {
  createCanvas(640, 480);
  j = new Juego();
  estado = 0;
  
}


function draw() {
  console.log(estado,contador);
  
  if (estado=== 0) {
    pantallaInicio(0);//inicio
  } else if (estado===1) {
    pantallaJuego();
  } else if (estado===1){
    pantalla(1,3,4);//ganaste
  } else if (estado===2) {
    pantalla(2,5,6);
  } //else if (estado===4) {
  //  pantalla(3);//perdiste
  //}
}//cdraw

function mousePressed() {
  if (estado===0) {
    if (colisionBoton(width/2, 400, 90, 40)) {
      estado = 1;
    } else if (estado===1) {
      if (colisionBoton(width/2, height*0.75, 200, 40)) {
        estado = 2;
      } else if ((estado===1) && (contador === 0)){
        estado = 2;
      }
    }
  }//pif
    
}//cmp

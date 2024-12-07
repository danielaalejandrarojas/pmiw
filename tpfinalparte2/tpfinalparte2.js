// tpfinalp2/ alumna: Daniela A Rojas/ Com:3/ tematica: Shrek1
// link a youtube: https://youtu.be/--iiDqYxU0o

let texto, img =[];
let j, musica, pant;

function preload() {
  texto= loadStrings('data/textos/textos.txt');
  //array para fondo de pantallas
  for (let i = 0; i < 5; i++) {
    img[i] = loadImage('data/imagenes/img'+nf(i, 2)+'.jpg');
  }
}

function setup() {
  createCanvas(640, 480);
  pant = new Pantallas();
}

function draw() {
  pant.realizar();
  pant.actualizar();
}

function mousePressed() {
  pant.cliquea();
}

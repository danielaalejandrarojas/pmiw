//tp1 pmiw. Alumna:Daniela Alejandra Rojas. Legajo: 78653/5 COMISION 3
//link a video: https://youtu.be/49bZbVq3c7E

//variables globales para ciclo for
let cant = 16;
let modX = 400/cant;

//variable global para el movimiento del rectangulo
let movx = 20, movy = 20;

let negro = 0
let celeste = 160;

let foto;

function preload() {
  foto = loadImage('data/JulioLeParcDoubleprogression.jpg');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  image(foto, 0, 0, 400, 400);
  fondo(137, celeste);

  for (let x = 0; x < cant; x ++) {
    for (let y = 0; y < cant; y ++) {
      miFigura(x, y);
      pelota(x, y);
    }
  }
}

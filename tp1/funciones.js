function miFigura(a, b) {
  //variable local para utilizar mi funcion de color
  let rellenoRect = colorRectangulo(242, 230, 231);

  fill(rellenoRect);
  noStroke();
  rect(402+a*modX, b*25, movx, movy);

  if (key === 'm') {
    movx = map(mouseX, 0, width-10, 10, 20);
    movy = map(mouseY, 0, height, 10, 20);
  } else if (key === 'M') {
    movx =20;
    movy =20;
  }
}

//FUNCION COLOR. CON RETURN Y PARAMETROS
function colorRectangulo(c, d, e) {
  let f = color(c, d, e);
  return f;
}

//FUNCION CON PARAMETROS SIN RETURN
function pelota( m, n) {
  //calcula la distancia desde los ejes x e y, mas el ancho y alto
  let distancia = dist(0, 0, width-400, height);
  //variable para moverme dentro  del ciclo for
  let dentrodelFor = dist(427+m*modX, n*25, 605, 200);
  //divido y multiplico las variables para el tamaño de las elipses
  let diametro = (dentrodelFor/distancia)*25;

  fill(negro, 0, negro);
  ellipse(412+m*modX, n*25+10, diametro, diametro);

  if ( key === 'n' ) {
    negro  = map(402+m, mouseX, width, 145, 255);
  } else if ( key === 'N' ) {
    negro = 0;
  }
}

//FUNCION CON PARAMETROS SIN RETURN. PARA MODIFICAR EL COLOR DEL FONDO
function fondo(red, green) {
  //variable local para asignarle a mi funcion "hayClick" el valor de true
  let verdadero = true;
  //variable para utilizar mifuncion
  let si = hayClick(verdadero);

  noStroke();
  fill(red, green, celeste);
  rect(400, 0, 400, 400);

  if (mouseIsPressed === si) {
    celeste ++;
    green ++;
  }
}

//FUNCION CON RETURN CON PARAMETROS
function hayClick(p) {
  return p;
}

//funcion para restablecer el valor inicial de las variables
function reset() {
  celeste = 160;
}
//reseteo variables con el teclado
function keyPressed() {
  if ( key === 'R') {
    reset();
  }
}

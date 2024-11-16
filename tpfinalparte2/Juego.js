class Juego{
  constructor(){
    //this.timer = new Tiempo();
    this.personaje = new Shrek();
    
    //propiedades para girasol
    this.contadorflor = 0;
    this.flor = [];
    this.cant = 3;
    for (let i=0; i<this.cant; i++) {
    //llamo al constructur de mi objeto
    this.flor[i] = new Girasol();
  }
} 

actualizar(){
  //metodo girasol
  for ( let i=0; i<this.cant; i++) {
      this.flor[i].actual();
    }
    this.personaje.reinicia();
    //this.timer.reiniciaCuenta(); 
}

}

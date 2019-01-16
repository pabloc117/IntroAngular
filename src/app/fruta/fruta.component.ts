import { Component } from '@angular/core';

@Component({
  selector:'fruta',
  templateUrl:'./fruta.Component.html'
})
export class FrutaComponent{
  public nombre_componente ;
  public listado_frutas ;
  private nombre:string;
  public edad:number;
  public mayordDeEdad:boolean;
  public trabajos:Array<any> = ['Carpintero',44, 'Fontanero'];
  comodin:any = 'PRRsho';

  constructor(){
    this.nombre = "Pablo Cifuentes";
    this.edad = 22;
    this.mayordDeEdad = true;
    this.comodin ="SI";

  }

  ngOnInit(){
    this.cambiarNombre();
    this.cambiarEdad(50);
    console.log(this.nombre + " tiene " +this.edad + " a;os" );
    var uno =8;
    var dos =15;
    if(uno === 8){
      let uno = 3;
      var dos = 88;
      console.log("Adentro "+uno+ " "+dos);
    }
    console.log("Fuera del IF "+ uno+" "+ dos);
  }

  cambiarNombre(){
    this.nombre = 'Juan Lopez';
  }

  cambiarEdad(edad){
    this.edad = edad;
  }
}

import { Component } from '@angular/core';
import { Empleado } from './empleado'
@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
  public titulo = 'Componente empleado';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public colorseleccionado:string;
  constructor() {
    this.empleado = new Empleado('Pablo Cifuentes', 22, 'Ingeniero', true);
    this.trabajadores = [
      new Empleado('Manolo Martinez', 60,'Administrativo',true),
      new Empleado('Huber Torres', 22,'Ingeniero',true),
      new Empleado('homero Simpson',45,'Supervisor Nuclear',false)
    ];
    this.trabajador_externo = true;
    this.color = 'blue';
    this.colorseleccionado = '#ccc';
  }
  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.colorseleccionado);
  }

}

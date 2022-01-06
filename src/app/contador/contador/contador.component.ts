import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{ title  }}</h1>
    <h3>La base es: <strong> {{ base }} </strong></h3>
    <button (click)=" calcular(base) ">+ {{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)=" calcular(-base) ">- {{ base }}</button>`
})

export class ContadorComponent {
  title:string = 'Aqui estoy nuevamente con mis primeros pasos en Angular';
  numero:number = 10;
  base:number = 5;

  calcular(numero: number): void {
    this.numero += numero;
  }
}

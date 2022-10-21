import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

    <button (click)="acum(1, true)">+1</button>
    <span (click)="base= 1">La base es de {{base}}</span>
    <button (click)="acum(-1, true)">-1</button>
    <br> <br>

    <button (click)="acum(base, false)">+1</button>
    <span (click)="num= 0">{{num}}</span>
    <button (click)="acum(-base, false)">-1</button>
    
    `

})

export class ContadorComponent {
    title = 'Contador App';
    num: number= 0;
  
    base: number=1;
  
    acum(income:number, tipo:boolean):void{
      if (tipo == false){
        this.num = this.num + income;
      }
      else{
        this.base = this.base + income;
      }
    }
  
}
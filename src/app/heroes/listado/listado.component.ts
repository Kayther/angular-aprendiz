import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman', 'Goku', 'John-Cena', 'Hitla']
  heroesDead!:string;
  i: number = 0;

  borrarHeroe(){
    this.heroesDead = this.heroes.pop() || "";
  }
}

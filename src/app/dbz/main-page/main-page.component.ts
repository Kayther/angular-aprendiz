import { DbzService } from './../services/dbz.service';
import { PropertyWrite } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { personaje } from '../dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  get dbzChars(): personaje[]{

    return this.DbzService.sagaFreezerChars
  }

  nuevo:personaje=
    {
      nombre: "",
      powerLevel: undefined,
    }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {return;}
    this.dbzChars.push(this.nuevo);
    this.nuevo= {
      nombre: "",
      powerLevel: undefined,
    }
  }

  constructor(private DbzService:DbzService){

  }
}

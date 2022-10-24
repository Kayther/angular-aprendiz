import { Injectable } from "@angular/core";
import { personaje } from "../dbz.interfaces";

@Injectable()

export class DbzService{

    sagaFreezerChars: personaje[]=[
        {
          nombre: "Freezer (first form)",
          powerLevel: 520000,
        },
        {
          nombre: "Vegeta",
          powerLevel: 250000,
        },
        {
          nombre: "Krillin",
          powerLevel: 28000,
        },
        {
          nombre: "Gohan",
          powerLevel: 30000,
        },
        {
          nombre: "Piccolo",
          powerLevel: 1000000,
        },
      ];
    constructor() {
        
    }

}
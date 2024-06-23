import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../../servicios/pizzas.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent implements OnInit{

  constructor(private pizzaService: PizzasService){

  }

  fotoCabecera: string = "assets/logoAnthonys.png";

  ngOnInit(): void {
      this.pizzaService.obtenerPizzas().subscribe(data => {
        console.log(data);
      })
  }
}

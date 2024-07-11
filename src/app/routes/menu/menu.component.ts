import { Component, inject, OnInit } from '@angular/core';
import { PizzasService } from '../../servicios/pizzas.service';
import { IPizza } from '../../modals/pizza.modal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  datos?:Array<IPizza>

  pizza = inject(PizzasService)
  ngOnInit(): void {
    this.pizza.obtenerPizzas().subscribe(data =>  this.datos = data)
    console.log(this.datos)
  }

}
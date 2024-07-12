import { Component } from '@angular/core';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  constructor(private cartService: CartService) {}

  addToCart(product: string, price: number) {
    this.cartService.addToCart({ name: product, price: price, quantity: 1 });
  }
  
}

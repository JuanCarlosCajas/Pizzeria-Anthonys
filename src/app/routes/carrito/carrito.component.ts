import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  constructor(private cartService: CartService) {}
  addToCart(product: string, price: number) {
    this.cartService.addToCart({ name: product, price: price, quantity: 1 });
  }

}

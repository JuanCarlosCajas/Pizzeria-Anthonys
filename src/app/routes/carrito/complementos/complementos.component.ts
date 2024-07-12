import { Component } from '@angular/core';
import { CartService } from '../../../cart.service';
@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrl: './complementos.component.css'
})
export class ComplementosComponent {
  constructor(private cartService: CartService) {}
  addToCart(product: string, price: number) {
    this.cartService.addToCart({ name: product, price: price, quantity: 1 });
  }

}

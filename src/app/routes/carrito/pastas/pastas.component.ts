import { Component } from '@angular/core';
import { CartService } from '../../../cart.service';
@Component({
  selector: 'app-pastas',
  templateUrl: './pastas.component.html',
  styleUrl: './pastas.component.css'
})
export class PastasComponent {
  constructor(private cartService: CartService) {}
  addToCart(product: string, price: number) {
    this.cartService.addToCart({ name: product, price: price, quantity: 1 });
  }
  

}

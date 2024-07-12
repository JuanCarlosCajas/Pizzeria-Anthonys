import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: Product) {
    const currentCart = this.cart.value;
    const existingProductIndex = currentCart.findIndex(item => item.name === product.name);
    if (existingProductIndex > -1) {
      currentCart[existingProductIndex].quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }
    this.cart.next(currentCart);
  }

  removeFromCart(product: Product) {
    const currentCart = this.cart.value.filter(item => item.name !== product.name);
    this.cart.next(currentCart);
  }

  clearCart() {
    this.cart.next([]);
  }

  getCart() {
    return this.cart.value;
  }
}

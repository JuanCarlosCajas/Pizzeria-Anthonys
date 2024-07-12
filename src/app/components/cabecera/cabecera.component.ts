import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../../servicios/pizzas.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  cart: any[] = [];
  totalCart: string = '0';
  cartVisible: boolean = false;
  fotoCabecera: string = "assets/logoAnthonys.png";

  constructor(private pizzaService: PizzasService, private cartService: CartService) {}

  ngOnInit(): void {
    this.pizzaService.obtenerPizzas().subscribe(data => {
      console.log(data); // Ejemplo: console.log para mostrar las pizzas obtenidas
    });

    // Suscripción al observable cart$ del CartService para actualizar el carrito y el total
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.calcularTotalCart();
    });
  }

  toggleCartVisibility(): void {
    this.cartVisible = !this.cartVisible;
  }

  calcularTotalCart(): void {
    if (this.cart.length === 0) {
      this.totalCart = '0';
    } else {
      const total = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      this.totalCart = 'S/' + total.toFixed(2);
    }
  }

  removeProduct(product: any): void {
    this.cartService.removeFromCart(product);
  }
}

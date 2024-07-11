import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corregido a styleUrls
})
export class AppComponent {
  title = 'PizerriaAngular';
  showHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !(event.url.includes('/users') || event.url.includes('/registrar')
        || event.url.includes('/dashboard')|| event.url.includes('/dproducto')|| event.url.includes('/dusuario')
        || event.url.includes('/dempleados')|| event.url.includes('/dpedidos'));
      }
    });
  }
}

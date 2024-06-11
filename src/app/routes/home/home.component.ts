import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  urlImagen = "assets/fondo_negro.webp";

  ngOnInit(): void {
    console.log("Home cargado");
  }
}

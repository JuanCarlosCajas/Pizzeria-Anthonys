import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../modals/producto.modal';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private baseUrl = "http://localhost:8080/api/producto"

  constructor(private http: HttpClient) { }

  public obtenerPizzas() : Observable<IProducto[]>{
    return this.http.get<IProducto[]>(this.baseUrl);
  }
}
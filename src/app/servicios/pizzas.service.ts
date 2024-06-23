import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from '../modals/pizza.modal';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private baseUrl = "http://localhost:8080/api/pizzas"

  constructor(private http: HttpClient) { }

  public obtenerPizzas() : Observable<IPizza[]>{
    return this.http.get<IPizza[]>(this.baseUrl);
  }
}

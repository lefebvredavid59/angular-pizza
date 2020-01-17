import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {
  constructor(private http: HttpClient) { }

  getPizzas(): Promise<Pizza[]>
  {
    return this.http.get('http://localhost:3000/pizza').toPromise().then(
      response => response as Pizza[]
    );
  }
}
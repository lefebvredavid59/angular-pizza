import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  pizzas : Pizza[] = [];
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    // On recupere les pizzas via le service sur l'API
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }

}

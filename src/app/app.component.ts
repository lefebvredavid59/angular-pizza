import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import {Author} from './models/author.model';

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];

const AUTHORS : Author[] = [
  {id: 1,
   name:'David', 
   lastname:'Lefebvre',
   bird: '1988-11-06',
   avatar:'https://image.flaticon.com/icons/png/128/36/36359.png'},
  {id: 2,
    name:'Aurelie',
    lastname:'Lefebvre',
    bird:'1988-03-01',
    avatar:'https://www.toornament.com/media/file/2573231687974862855/logo_large?v=1569941863'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Party';
  selectedPizza: Pizza;
  selectedAuthor: Author;
  pizzas: Pizza[] = PIZZAS;
  authors: Author[] = AUTHORS;
  

  onSelect(pizza : Pizza): void{
    //On recupere la pizza cliquee
    console.log(pizza);
    this.selectedPizza = pizza;  
  }

  onSelect2(author : Author): void{
    console.log(author);
    this.selectedAuthor = author;
  }
}
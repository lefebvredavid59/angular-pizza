import { Component, Input } from '@angular/core';
import { Author } from '../models/author.model';

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.scss']
})
export class AuthorComponentComponent{
  @Input() author: Author;
}

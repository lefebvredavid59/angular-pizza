import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent{
isCollapsed: boolean = false;
@Input() title: string;
@Input() color: string ='light';

toggleCollapse(){
  this.isCollapsed = !this.isCollapsed;
  }

  switchTheme(){
    // on inverse la couleur du theme entre dark et light
    this.color = ('light' == this.color) ? 'dark' : 'light';
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() recipes = new EventEmitter()
@Output() shopping = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onRecipes() {
      this.recipes.emit('recipes');
  }

  onShopping() {
    this.shopping.emit('shopping');
  }
}

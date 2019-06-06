import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// @Output() recipes = new EventEmitter()
// @Output() shopping = new EventEmitter()

  constructor(private dataService: DataStorageService) { }

  ngOnInit() {
  }

  onSaveData() {
      this.dataService.storeRecipes();
  }

  onFetchData() {
    this.dataService.fetchRecipes().subscribe();
}

//   onRecipes() {
//       this.recipes.emit('recipes');
//   }

//   onShopping() {
//     this.shopping.emit('shopping');
//   }
}

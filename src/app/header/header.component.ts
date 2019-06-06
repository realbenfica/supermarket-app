import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
// @Output() recipes = new EventEmitter()
// @Output() shopping = new EventEmitter()
private userSub: Subscription;
isAuthenticated = false;

  constructor(
      private dataService: DataStorageService,
      private authService: AuthService) { }

  ngOnInit() {
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !user ? false : true;
      })
  }

  ngOnDestroy() {
      this.userSub.unsubscribe()
  }

  onSaveData() {
      this.dataService.storeRecipes();
  }

  onFetchData() {
    this.dataService.fetchRecipes().subscribe();
}

onLogout() {
    this.isAuthenticated = false;
}

//   onRecipes() {
//       this.recipes.emit('recipes');
//   }

//   onShopping() {
//     this.shopping.emit('shopping');
//   }
}

import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {}

    ngOnInit() {}

    toShoppingList() {
        this.recipeService.toShoppingList(this.selectedRecipe.ingredients);
    }
}

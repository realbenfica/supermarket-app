import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://live.staticflickr.com/5737/30622968353_35e06fcb52_b.jpg'
        ),
        new Recipe(
            'A Delicious Recipe',
            'This is simply so delicious',
            'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_960_720.jpg'
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}

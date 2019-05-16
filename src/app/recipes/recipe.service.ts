import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Fruit Salad',
            'This is a very delicious salad full of flavour!',
            'https://live.staticflickr.com/5737/30622968353_35e06fcb52_b.jpg',
            [
                new Ingredient('kiwi', 3),
                new Ingredient('bananas', 2),
                new Ingredient('watermelon', 1),
                new Ingredient('strawberries', 30)
            ]
        ),
        new Recipe(
            'A Tasty Breakfast',
            'This is simply so delicious',
            'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_960_720.jpg',
            [
                new Ingredient('oranges', 1),
                new Ingredient('jam', 1),
                new Ingredient('pear', 1),
                new Ingredient('bread', 2)
            ]
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}

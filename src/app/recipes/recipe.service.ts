import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    // recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

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

constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index:number) {
        return this.recipes.slice()[index];
    }

    toShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }
}

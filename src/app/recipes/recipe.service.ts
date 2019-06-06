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
        // new Recipe(
        //     'The Perfect Salad',
        //     'Linachka would love this one for sure!',
        //     'http://scibosnian.com/wp-content/uploads/2017/07/Salmon_Salad_2.jpg',
        //     [
        //         new Ingredient('avocado', 1),
        //         new Ingredient('cucumber', 1),
        //         new Ingredient('cherry tomatoes', 10),
        //         new Ingredient('salmon', 1),
        //         new Ingredient('sesame seeds', 50),
        //         new Ingredient('salad', 1),
        //     ]
        // ),
        // new Recipe(
        //     'Fruit Salad',
        //     'This is a very delicious salad full of flavour!',
        //     'https://live.staticflickr.com/5737/30622968353_35e06fcb52_b.jpg',
        //     [
        //         new Ingredient('kiwi', 3),
        //         new Ingredient('bananas', 2),
        //         new Ingredient('watermelon', 1),
        //         new Ingredient('strawberries', 30)
        //     ]
        // ),
        // new Recipe(
        //     'A Tasty Breakfast',
        //     'This is simply so delicious',
        //     'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_960_720.jpg',
        //     [
        //         new Ingredient('oranges', 1),
        //         new Ingredient('jam', 1),
        //         new Ingredient('pear', 1),
        //         new Ingredient('bread', 2)
        //     ]
        // )
    ];

constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

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

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}

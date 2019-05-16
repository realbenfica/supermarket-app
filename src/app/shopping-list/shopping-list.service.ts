import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    ingredientAdded(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
        console.log(this.ingredients);
    }
}

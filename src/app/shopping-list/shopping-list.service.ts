import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
    ];

    ingredientAdded(newIngredient) {
        this.ingredients.push(newIngredient)
    }
}

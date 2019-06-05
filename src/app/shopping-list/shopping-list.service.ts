import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
    ];

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    ingredientAdded(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.ingredientAdded(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

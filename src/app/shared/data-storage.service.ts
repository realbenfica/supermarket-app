import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators'
import { fromEventPattern } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipesService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        console.log(recipes)
        this.http.put('https://supermarket-app-b7739.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
                console.log(response);
            })
    }

    fetchRecipes() {
        this.http.get<Recipe[]>('https://supermarket-app-b7739.firebaseio.com/recipes.json')
        .pipe(map(recipes => {
            return recipes.map(recipes => {
                return {...recipes, ingredients: recipes.ingredients ? recipes.ingredients : []};
            });
        }))
        .subscribe(recipes => {
            this.recipesService.setRecipes(recipes);
        })
    }
}

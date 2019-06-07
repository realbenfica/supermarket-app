import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { fromEventPattern } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipesService: RecipeService,
        private authService: AuthService
    ) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http
            .put(
                'https://supermarket-app-b7739.firebaseio.com/recipes.json',
                recipes
            )
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                console.log(user.token)
                return this.http.get<Recipe[]>(
                    'https://supermarket-app-b7739.firebaseio.com/recipes.json',
                    {
                        params: new HttpParams().set('auth', user.token)
                    }
                );
            }),
            map(recipes => {
                return recipes.map(recipes => {
                    return {
                        ...recipes,
                        ingredients: recipes.ingredients
                            ? recipes.ingredients
                            : []
                    };
                });
            }),
            tap(recipes => {
                this.recipesService.setRecipes(recipes);
            })
        );

        // .subscribe(recipes => {
        //     this.recipesService.setRecipes(recipes);
        // })
    }
}

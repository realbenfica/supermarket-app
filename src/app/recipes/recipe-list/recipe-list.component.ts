import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
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

    @Output() recipeName = new EventEmitter();

    selectedRecipe(recipeName: Recipe) {
        this.recipeName.emit(recipeName);
    }

    constructor() {}

    ngOnInit() {}
}

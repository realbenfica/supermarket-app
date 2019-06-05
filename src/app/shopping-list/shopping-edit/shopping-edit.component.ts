import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    // @ViewChild('nameInput') nameInput: ElementRef;
    // @ViewChild('amountInput') amountInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {}

    onAddItem(form: NgForm) {
        // this.shoppingListService.ingredientAdded({
        //     name: this.nameInput.nativeElement.value,
        //     amount: this.amountInput.nativeElement.value
        // });
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        this.shoppingListService.ingredientAdded(newIngredient);
        console.log(form.value);
    }
}

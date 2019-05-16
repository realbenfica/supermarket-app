import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    @Output() newIngredient = new EventEmitter<Ingredient>()

    onAdd() {
        this.newIngredient.emit({
            name: this.nameInput.nativeElement.value,
            amount: this.amountInput.nativeElement.value
        });
    }

    constructor() {}

    ngOnInit() {}
}

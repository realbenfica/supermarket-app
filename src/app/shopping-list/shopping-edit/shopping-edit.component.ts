import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    onAdd() {
        this.shoppingListService.ingredientAdded({
            name: this.nameInput.nativeElement.value,
            amount: this.amountInput.nativeElement.value
        });
    }

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {}
}

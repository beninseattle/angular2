import { Component, OnChanges, Input } from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() ingredient: Ingredient;
  isAdd = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnChanges( changes ){
    if( changes.ingredient.currentValue === null ){
      this.isAdd = true;
      this.ingredient = new Ingredient(null, null);
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    if( this.isAdd ) {
      this.shoppingListService.addItem(ingredient);
    } else {
      // Edit
    }
  }
}

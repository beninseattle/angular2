import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedIngredient: Ingredient = null;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

  onSelectIngredient( ingredient: Ingredient ){
    this.selectedIngredient = ingredient;
  }

  onCleared() {
    this.selectedIngredient = null;
  }
}

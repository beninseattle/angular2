import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.recipe.ingredients);
  }
}

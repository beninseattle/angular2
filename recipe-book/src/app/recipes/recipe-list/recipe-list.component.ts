import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() selectRecipe = new EventEmitter<Recipe>();
  //recipe: Recipe = new Recipe('Turkey', 'Roast turkey', 'https://thumbs.dreamstime.com/z/wild-turkey-1776418.jpg');

  constructor (private recipeService: RecipeService) { }

  ngOnInit () {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected (recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }
}

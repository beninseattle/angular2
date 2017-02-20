import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() selectRecipe = new EventEmitter<Recipe>();
  //recipe: Recipe = new Recipe('Turkey', 'Roast turkey', 'https://thumbs.dreamstime.com/z/wild-turkey-1776418.jpg');

  constructor () { }

  ngOnInit () {
    this.recipes[0] = new Recipe('Turkey', 'Roast turkey', 'https://thumbs.dreamstime.com/z/wild-turkey-1776418.jpg', []);
    this.recipes[1] = new Recipe('Turkey2', 'Roast turkey2', 'https://thumbs.dreamstime.com/z/wild-turkey-1776418.jpg', []);
  }

  onSelected (recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }
}

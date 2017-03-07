import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Turkey', 'Roast turkey', 'https://thumbs.dreamstime.com/z/wild-turkey-1776418.jpg', [
      new Ingredient('Turkey', 1),
      new Ingredient('Breadcrumbs', 5),
      new Ingredient('Spices', 10)
    ]),
    new Recipe('Turkey2', 'Roast turkey2', 'https://s3.amazonaws.com/graphics.texastribune.org/graphics/turkey-facts/assets/turkey-beard.jpg', [
      new Ingredient('Turkey', 1),
      new Ingredient('Breadcrumbs', 5),
      new Ingredient('Gravy', 3)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe( index: number ) {
    return this.recipes[index];
  }

  deleteRecipe( recipe: Recipe ) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}

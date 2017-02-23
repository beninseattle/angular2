import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Turkey', 'Roast turkey', 'https://thumbs.dreamstime.com/z/wild-turkey-1776418.jpg', []),
    new Recipe('Turkey2', 'Roast turkey2', 'https://s3.amazonaws.com/graphics.texastribune.org/graphics/turkey-facts/assets/turkey-beard.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}

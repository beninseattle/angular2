import {Injectable, EventEmitter} from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

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

  recipesChanged = new EventEmitter<Recipe[]>();

  constructor( private http: Http ) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe( index: number ) {
    return this.recipes[index];
  }

  deleteRecipe( recipe: Recipe ) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe( recipe: Recipe ){
    this.recipes.push( recipe );
  }

  editRecipe( oldRecipe: Recipe, recipe: Recipe ){
    this.recipes[this.recipes.indexOf(oldRecipe)] = recipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http.put('https://recipebook-8e1cd.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-8e1cd.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}

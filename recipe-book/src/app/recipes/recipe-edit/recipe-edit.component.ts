import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Ingredient} from "../../shared/ingredient";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeIndex: number;
  private recipe: Recipe = null;
  private isNew = true;
  private recipeSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeSubscription = this.route.params.subscribe(
      (params: any) =>  {
        if( params.hasOwnProperty('id') ){
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }

  onSubmit() {
    const recipe = this.recipeForm.value;
    let newRecipe = new Recipe( recipe.name, recipe.description, recipe.imagePath, recipe.ingredients );
    if( this.isNew ){
      this.recipeService.addRecipe( newRecipe );
    } else {
      this.recipeService.editRecipe( this.recipe, newRecipe );
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onRemoveIngredient( index: number ){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt( index );
  }

  onAddIngredient( name: string, amount: number ){
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [Validators.required, Validators.pattern("\\d+")])
      })
    );
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if( !this.isNew ) {
      for( let i = 0; i < this.recipe.ingredients.length; i++ ){
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern("\\d+")])
          })
        );
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;

    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }
}

import {Ingredient} from '../shared/ingredient.model';
import {OnInit} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService implements OnInit {

  ingredientsChanged = new Subject<Ingredient[]>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  ngOnInit(): void {
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ingredientsChangedSubscription: Subscription;

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
   this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredient []) => {
        this.ingredients = ingredient;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }
}

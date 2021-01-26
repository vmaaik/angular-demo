import {
  Component, OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('myForm', {static: false}) myForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number = null;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ingredientOnEdit: Ingredient;

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientOnEdit.subscribe((id => {
      this.editMode = true;
      this.editedItemIndex = id;
      this.ingredientOnEdit = this.shoppingListService.getIngredient(id);
      this.myForm.setValue({
        name: this.ingredientOnEdit.name,
        amount: this.ingredientOnEdit.amount
      });
    }));

  }

  onSubmit() {
    const value = this.myForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.myForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.myForm.reset();
    this.editMode = false;
  }

  onDelete() {
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.onClear();
  }


}

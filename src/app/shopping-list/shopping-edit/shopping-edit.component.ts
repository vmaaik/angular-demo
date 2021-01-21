import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output() shoppingDelete: EventEmitter<void> = new EventEmitter<void>();
  @Output() clearList: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  onSuccess(): void {
    this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

  ngOnInit(): void {
  }

}

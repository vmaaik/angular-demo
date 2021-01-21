import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is the best pizza', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=768:*'),
    new Recipe('Pasta', 'Carbonara ', 'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg'),
    new Recipe('Sushi', '10 rolls ', 'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg')

  ];

  @Output()
  itemSelectedFromList: EventEmitter<Recipe> = new EventEmitter<Recipe>();


  onItemSelect(recipe: Recipe): void {
    this.itemSelectedFromList.emit(recipe);
  }


  ngOnInit(): void {
  }

}

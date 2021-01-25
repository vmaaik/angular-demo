import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {PlaceholderComponent} from './recipes/placeholder/placeholder.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent},

  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: PlaceholderComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  // it must have a pathMatch as all path has empty prefix
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule(
  {
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {
}


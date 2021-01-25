import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';


const appRoutes: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: ':id', component: RecipeDetailComponent}]},
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


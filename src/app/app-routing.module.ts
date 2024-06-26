import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateRecipeComponent } from './create-article/create-recipe/create-recipe.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  {
    path: '', title: 'Home | Recipes', component: RecipesComponent
  },
  {
    path: 'recipes', title: 'Home | Recipes', component: RecipesComponent,
  },
  { 
    path: 'new', title: 'New recipe | Recipes', component: CreateArticleComponent,
  },
  {
    path: 'categories', title: 'Categories | Recipes', component: CategoriesComponent
  },
  {
    path: 'recipes',
    children: [
      { path: ':id', component: RecipeComponent }
    ]
  },
  {
    path: 'coz/admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.adminModule)
  },
  { path: '**', title: 'Page not found | Recipes', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

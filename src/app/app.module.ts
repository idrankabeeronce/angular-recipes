import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeComponent } from './recipe/recipe.component';
import { ErrorComponent } from './error/error.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories/categories.component';
import { CreateRecipeComponent } from './create-article/create-recipe/create-recipe.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReviewFormComponent } from './review-form/review-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeaderComponent,
    FooterComponent,
    RecipeComponent,
    ErrorComponent,
    CategoriesComponent,
    CreateRecipeComponent,
    CreateArticleComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

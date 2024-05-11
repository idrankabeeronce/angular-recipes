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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReviewFormComponent } from './review-form/review-form.component';
import { PopupComponent } from './popup/popup.component';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';
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
    ReviewFormComponent,
    PopupComponent,
    AuthPopupComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [PopupComponent,
    { 
      provide: MatDialogRef,
      useValue: []
    }, 
    { 
     provide: MAT_DIALOG_DATA, 
     useValue: [] 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as dataCategories from '../../assets/base/categories.json'
import * as dataRecipes from '../../assets/base/recipes.json';

import { map } from 'rxjs/operators';
import { RecipesGetListParams } from '../interfaces/recipesGetListParams';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryListItem } from '../interfaces/categoryListItem';
import { GetRecipesData } from '../interfaces/getRecipesData';
import { RecipeListItem } from '../interfaces/recipeListItem';
import { CategoriesGetListParams } from '../interfaces/categoriesGetListParams';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  /**
   * Method returns list of recipes and pagination length
   * @param recipesDataArgs options with query and pagination
   * @return An Observable
   */
  getRecipes(recipesDataArgs: RecipesGetListParams) {
    if (environment.production) {
      return this.http.post(`${this.baseUrl}/list`, recipesDataArgs).pipe(
        map((res: any) => {          
          return res['data'];
        })
      );
    } else {
      let tmpArrayOfRecipes = [];
      
      for (let item of (dataRecipes as any).default) {
        if (recipesDataArgs.category ? item.categories.includes(recipesDataArgs.category) : true) {
          if (recipesDataArgs.searchParam ? item.title.toLowerCase().includes(recipesDataArgs.searchParam) : true) {
            tmpArrayOfRecipes.push(item);
          }
        }
      }

      const slicedArray = tmpArrayOfRecipes.slice(((recipesDataArgs.step - 1) * 10), 10 * recipesDataArgs.step);
            
      let result = new BehaviorSubject<GetRecipesData>({
        list: slicedArray, 
        pagingationLength: Math.floor(tmpArrayOfRecipes.length / 10) + 1
      })
      return result.asObservable();
    }
  }

  /**
   * Method returns list of categories
   * @param categoriesDataArgs options with query
   * @return An Observable
   */
  getCategories(categoriesDataArgs:CategoriesGetListParams) {
    if (environment.production) {
      return this.http.post(`${this.baseUrl}/categories`, categoriesDataArgs).pipe(
        map((res: any) => {
          return res['data'];
        })
      );
    } else { 
      return new BehaviorSubject<Array<CategoryListItem>>(
        (dataCategories as any).default
          .map((el:string, key: number) => {return {id: key, title: el}})
      ).asObservable();
    }
  }
  
}

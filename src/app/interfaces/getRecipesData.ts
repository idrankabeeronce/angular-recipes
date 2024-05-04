import { RecipeListItem } from "./recipeListItem";

export interface GetRecipesData {
    list: Array<RecipeListItem>,
    pagingationLength: number
}
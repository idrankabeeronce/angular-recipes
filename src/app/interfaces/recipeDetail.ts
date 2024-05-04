import { Author } from "./author"
import { Ingredient } from "./ingredient"

export interface RecipeDetail {
    id: number,
    title: string,
    ref: string,
    author: Author,
    difficulty: number,
    categories: Array<string>,
    portionsDefault: number,
    portions: number,
    ingredients: Array<Ingredient>,
    timeToDo: {
        hours: number,
        minutes: number
    }

}
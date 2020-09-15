export interface Recipe {
  name: string;
  duration: number;
  id: string;
  score: number;
}

export type Recipes = Recipe[];

export interface RecipeDetail extends Recipe {
  description: string;
  ingredients: string[];
  info: string;

}

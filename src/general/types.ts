export interface Recipe {
    name: string;
    duration: number;
    id: string;
    score: number;
}

export interface RecipeContent {
  description: string;
  ingredients: string[];
  info: string;
}

export type Recipes = Recipe[];
export type RecipeDetail = Recipe & RecipeContent;


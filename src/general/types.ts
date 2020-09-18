export interface Recipe {
    name: string;
    duration: number;
}

export interface RecipeBackendData {
    score: number;
    id: string;
}

export interface RecipeContent {
    description: string;
    ingredients: string[];
    info: string;
}

export type RecipeWithBackendData = Recipe & RecipeBackendData;
export type Recipes = RecipeWithBackendData[];
export type RecipeDetail = RecipeWithBackendData & RecipeContent;
export type NewRecipe = Recipe & RecipeContent;

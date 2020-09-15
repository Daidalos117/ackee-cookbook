import { Recipes } from '../general/recipes';

export const FETCH_RECIPE_REQUESTED = 'FETCH_RECIPES_REQUESTED';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPE_ERROR = 'FETCH_RECIPES_ERROR';

interface FetchRequestAction {
  type: typeof FETCH_RECIPE_REQUESTED;
  id: string;
}

interface FetchSuccessAction {
  type: typeof FETCH_RECIPE_SUCCESS;
  data: Recipes;
  hasMore: boolean;
}

interface FetchErrorAction {
  type: typeof FETCH_RECIPE_ERROR;
  error: string;
}

export type RecipeActionTypes = FetchRequestAction | FetchSuccessAction | FetchErrorAction;

export const fetchRecipeRequest = (id: string) => ({
  type: FETCH_RECIPE_REQUESTED,
  id
});

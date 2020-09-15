import { Recipes } from '../general/types';

export const FETCH_RECIPE_REQUESTED = 'FETCH_RECIPE_REQUESTED';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_ERROR = 'FETCH_RECIPE_ERROR';

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

export type RecipeFetchActionTypes = FetchRequestAction | FetchSuccessAction | FetchErrorAction;


export const fetchRecipeRequest = (id: string) => ({
  type: FETCH_RECIPE_REQUESTED,
  id
});


export const RATE_RECIPE_REQUESTED = 'RATE_RECIPE_REQUESTED';
export const RATE_RECIPE_SUCCESS = 'RATE_RECIPE_SUCCESS';
export const RATE_RECIPE_ERROR = 'RATE_RECIPE_ERROR';

interface RateRequestAction {
  type: typeof FETCH_RECIPE_REQUESTED;
  id: string;
  score: number;
}

interface RateSuccessAction {
  type: typeof RATE_RECIPE_SUCCESS;
  score: number;
}

export type RateActionTypes = RateRequestAction | RateSuccessAction;

export type RecipeActionTypes = RecipeFetchActionTypes | RateActionTypes;

export const rateRecipeRequest = (id: string, score: number) => ({
  type: RATE_RECIPE_REQUESTED,
  id,
  score
});

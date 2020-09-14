import { Recipes } from '../types/recipes';

export const FETCH_RECIPES_REQUESTED = 'FETCH_RECIPES_REQUESTED';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

interface FetchRequestAction {
    type: typeof FETCH_RECIPES_REQUESTED;
}

interface FetchSuccessAction {
    type: typeof FETCH_RECIPES_SUCCESS;
    data: Recipes;
}

interface FetchErrorAction {
    type: typeof FETCH_RECIPES_ERROR;
    error: string;
}

export type RecipesActionTypes = FetchRequestAction | FetchSuccessAction | FetchErrorAction;

export const requestFetchRecipes = () => ({
    type: FETCH_RECIPES_REQUESTED
});


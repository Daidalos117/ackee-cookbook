import { Recipes } from '../general/types';

export const FETCH_RECIPES_REQUESTED = 'FETCH_RECIPES_REQUESTED';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

interface FetchRequestAction {
    type: typeof FETCH_RECIPES_REQUESTED;
    length: number;
}

interface FetchSuccessAction {
    type: typeof FETCH_RECIPES_SUCCESS;
    data: Recipes;
    hasMore: boolean;
}

interface FetchErrorAction {
    type: typeof FETCH_RECIPES_ERROR;
    error: string;
}

export type RecipesActionTypes = FetchRequestAction | FetchSuccessAction | FetchErrorAction;

export const fetchRecipesRequest = (length: number) => ({
    type: FETCH_RECIPES_REQUESTED,
    length
});

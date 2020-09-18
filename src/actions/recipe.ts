import { Recipes } from "general/types";

export const FETCH_RECIPE_REQUESTED = "FETCH_RECIPE_REQUESTED";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_ERROR = "FETCH_RECIPE_ERROR";

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

export type RecipeFetchActionTypes =
    | FetchRequestAction
    | FetchSuccessAction
    | FetchErrorAction;

export const fetchRecipeRequest = (id: string) => ({
    type: FETCH_RECIPE_REQUESTED,
    id,
});

export const RATE_RECIPE_REQUESTED = "RATE_RECIPE_REQUESTED";
export const RATE_RECIPE_SUCCESS = "RATE_RECIPE_SUCCESS";
export const RATE_RECIPE_ERROR = "RATE_RECIPE_ERROR";

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

export const rateRecipeRequest = (id: string, score: number) => ({
    type: RATE_RECIPE_REQUESTED,
    id,
    score,
});

export const RATE_LOAD_REQUESTED = "RATE_LOAD_REQUESTED";
export const RATE_LOAD_SUCCESS = "RATE_LOAD_SUCCESS";

export const rateLoadRequest = (id: string) => ({
    type: RATE_LOAD_REQUESTED,
    id,
});

interface RateLoadRequestAction {
    type: typeof RATE_LOAD_REQUESTED;
    id: string;
}

interface RateLoadSuccessAction {
    type: typeof RATE_LOAD_SUCCESS;
    score?: number;
}

export type RateLoadActionTypes = RateLoadRequestAction | RateLoadSuccessAction;

export const DELETE_RECIPE_REQUESTED = "DELETE_RECIPE_REQUESTED";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_ERROR = "DELETE_RECIPE_ERROR";

export const deleteRecipeRequested = (id: string) => ({
    type: DELETE_RECIPE_REQUESTED,
    id,
});

interface DeleteRecipeRequestAction {
    type: typeof DELETE_RECIPE_REQUESTED;
    id: string;
}

interface DeleteRecipeSuccessAction {
    type: typeof DELETE_RECIPE_SUCCESS;
    id: string;
}

interface DeleteRecipeErrorAction {
    type: typeof DELETE_RECIPE_ERROR;
    id: string;
}

export type DeleteRecipeActionTypes =
    | DeleteRecipeRequestAction
    | DeleteRecipeSuccessAction
    | DeleteRecipeErrorAction;

export type RecipeActionTypes =
    | RecipeFetchActionTypes
    | RateActionTypes
    | RateLoadActionTypes
    | DeleteRecipeActionTypes;

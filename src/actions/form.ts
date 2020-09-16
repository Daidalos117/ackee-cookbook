import { NewRecipe } from "../general/types";

export const SUBMIT_RECIPE_REQUESTED = "SUBMIT_RECIPE_REQUESTED";
export const SUBMIT_RECIPE_SUCCESS = "SUBMIT_RECIPE_SUCCESS";
export const SUBMIT_RECIPE_ERROR = "SUBMIT_RECIPE_ERROR";
export const SUBMIT_RECIPE_ERROR_RESET = "SUBMIT_RECIPE_ERROR_RESET";

export interface SubmitRecipeRequestedAction {
    type: typeof SUBMIT_RECIPE_REQUESTED;
    payload: NewRecipe;
}

export interface SubmitRecipeSuccessAction {
    type: typeof SUBMIT_RECIPE_SUCCESS;
}

export interface SubmitRecipeErrorAction {
    type: typeof SUBMIT_RECIPE_ERROR;
    error: string;
}

export interface RecipeErrorResetAction {
    type: typeof SUBMIT_RECIPE_ERROR_RESET;
}

export type RecipeSubmitActions =
    | SubmitRecipeRequestedAction
    | SubmitRecipeSuccessAction
    | SubmitRecipeErrorAction
    | RecipeErrorResetAction;
export type RecipeFormActions = RecipeSubmitActions;

export const submitRecipeRequest = (payload: NewRecipe) => ({
    type: SUBMIT_RECIPE_REQUESTED,
    payload
});

export const resetRecipeError = () => ({
    type: SUBMIT_RECIPE_ERROR_RESET
});

export type FormActions = RecipeFormActions;

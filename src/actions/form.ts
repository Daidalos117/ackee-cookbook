import { NewRecipe } from "general/types";

export const SUBMIT_RECIPE_REQUESTED = "SUBMIT_RECIPE_REQUESTED";
export const SUBMIT_RECIPE_SUCCESS = "SUBMIT_RECIPE_SUCCESS";
export const SUBMIT_RECIPE_ERROR = "SUBMIT_RECIPE_ERROR";
export const SUBMIT_RECIPE_ERROR_RESET = "SUBMIT_RECIPE_ERROR_RESET";
export const SUBMIT_RECIPE_SUCCESS_RESET = "SUBMIT_RECIPE_SUCCESS_RESET";

export interface SubmitRecipeRequestedAction {
    type: typeof SUBMIT_RECIPE_REQUESTED;
    payload: Partial<NewRecipe>;
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

export interface RecipeSuccessResetAction {
    type: typeof SUBMIT_RECIPE_SUCCESS_RESET;
}

export type RecipeSubmitActions =
    | SubmitRecipeRequestedAction
    | SubmitRecipeSuccessAction
    | SubmitRecipeErrorAction
    | RecipeErrorResetAction
    | RecipeSuccessResetAction;
export type RecipeFormActions = RecipeSubmitActions;

export const submitRecipeRequest = (payload: Partial<NewRecipe>) => ({
    type: SUBMIT_RECIPE_REQUESTED,
    payload,
});

export const resetRecipeError = () => ({
    type: SUBMIT_RECIPE_ERROR_RESET,
});

export const resetRecipeSuccess = () => ({
    type: SUBMIT_RECIPE_SUCCESS_RESET,
});

export type FormActions = RecipeFormActions;

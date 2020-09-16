import {NewRecipe} from "../general/types";
import {FETCH_RECIPE_REQUESTED} from "./recipe";

export const SUBMIT_RECIPE_REQUESTED = "SUBMIT_RECIPE_REQUESTED";
export const SUBMIT_RECIPE_SUCCESS = "SUBMIT_RECIPE_SUCCESS";
export const SUBMIT_RECIPE_ERROR = "SUBMIT_RECIPE_ERROR";


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

export type RecipeSubmitActions = SubmitRecipeRequestedAction | SubmitRecipeSuccessAction | SubmitRecipeErrorAction;
export type RecipeFormActions = RecipeSubmitActions;


export const submitRecipeRequest = (payload: NewRecipe) => ({
  type: SUBMIT_RECIPE_REQUESTED,
  payload
});


export type FormActions = RecipeFormActions;

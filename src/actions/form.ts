import {Recipes} from "../general/types";
import {FETCH_RECIPE_ERROR, FETCH_RECIPE_REQUESTED, FETCH_RECIPE_SUCCESS} from "./recipe";

export const SUBMIT_RECIPE_REQUESTED = "SUBMIT_RECIPE_REQUESTED";
export const SUBMIT_RECIPE_SUCCESS = "SUBMIT_RECIPE_SUCCESS";
export const SUBMIT_RECIPE_ERROR = "SUBMIT_RECIPE_ERROR";


interface SubmitRecipeSubmitAction {
  type: typeof SUBMIT_RECIPE_REQUESTED;
}

interface SubmitRecipeSuccessAction {
  type: typeof SUBMIT_RECIPE_SUCCESS;
}

interface SubmitRecipeErrorAction {
  type: typeof SUBMIT_RECIPE_ERROR;
  error: string;
}

export type RecipeSubmitActions = SubmitRecipeSubmitAction | SubmitRecipeSuccessAction | SubmitRecipeErrorAction;
export type RecipeFormActions = RecipeSubmitActions;



export type FormActions = RecipeFormActions;

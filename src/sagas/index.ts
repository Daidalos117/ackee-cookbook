import { all, takeEvery } from "redux-saga/effects";
import { fetchRecipes } from "./recipes";
import {
    fetchRecipe,
    rateRecipe,
    loadRecipeRate,
    deleteRecipe,
} from "./recipe";
import { FETCH_RECIPES_REQUESTED } from "actions/recipes";
import {
    FETCH_RECIPE_REQUESTED,
    RATE_RECIPE_REQUESTED,
    RATE_LOAD_REQUESTED,
    DELETE_RECIPE_REQUESTED,
} from "actions/recipe";
import { SUBMIT_RECIPE_REQUESTED } from "actions/form";
import { submitRecipe } from "./form";

function* rootSaga() {
    yield all([
        takeEvery(FETCH_RECIPES_REQUESTED, fetchRecipes),
        takeEvery(FETCH_RECIPE_REQUESTED, fetchRecipe),
        takeEvery(RATE_RECIPE_REQUESTED, rateRecipe),
        takeEvery(RATE_LOAD_REQUESTED, loadRecipeRate),
        takeEvery(SUBMIT_RECIPE_REQUESTED, submitRecipe),
        takeEvery(DELETE_RECIPE_REQUESTED, deleteRecipe),
    ]);
}

export default rootSaga;

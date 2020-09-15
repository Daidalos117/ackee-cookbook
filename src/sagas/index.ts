import { all, takeEvery } from "redux-saga/effects";
import { fetchRecipes } from "./recipes";
import { fetchRecipe, rateRecipe, loadRecipeRate } from "./recipe";
import { FETCH_RECIPES_REQUESTED } from "../actions/recipes";
import {
    FETCH_RECIPE_REQUESTED,
    RATE_RECIPE_REQUESTED,
    RATE_LOAD_REQUESTED
} from "../actions/recipe";

function* rootSaga() {
    yield all([
        takeEvery(FETCH_RECIPES_REQUESTED, fetchRecipes),
        takeEvery(FETCH_RECIPE_REQUESTED, fetchRecipe),
        takeEvery(RATE_RECIPE_REQUESTED, rateRecipe),
        takeEvery(RATE_LOAD_REQUESTED, loadRecipeRate)
    ]);
}

export default rootSaga;

import { all, takeEvery } from "redux-saga/effects";
import { fetchRecipes } from "./recipes";
import { fetchRecipe, rateRecipe } from "./recipe";
import { FETCH_RECIPES_REQUESTED } from "../actions/recipes";
import { FETCH_RECIPE_REQUESTED, RATE_RECIPE_REQUESTED } from "../actions/recipe";

function* rootSaga() {
    yield all([
        takeEvery(FETCH_RECIPES_REQUESTED, fetchRecipes),
        takeEvery(FETCH_RECIPE_REQUESTED, fetchRecipe),
        takeEvery(RATE_RECIPE_REQUESTED, rateRecipe),
    ]);

}

export default rootSaga;

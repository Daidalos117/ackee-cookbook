import { all, takeEvery } from "redux-saga/effects";
import { fetchRecipes } from "./recipes";
import { fetchRecipe } from "./recipe";
import { FETCH_RECIPES_REQUESTED } from "../actions/recipes";
import { FETCH_RECIPE_REQUESTED } from "../actions/recipe";

function* rootSaga() {
    yield all([
        takeEvery(FETCH_RECIPES_REQUESTED, fetchRecipes),
        takeEvery(FETCH_RECIPE_REQUESTED, fetchRecipe)
    ]);

}

export default rootSaga;

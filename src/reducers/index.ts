import { combineReducers } from "redux";
import recipes, { RecipesState } from "reducers/recipes";
import recipe, { RecipeState } from "reducers/recipe";

export type State = {
    recipes: RecipesState;
    recipe: RecipeState;
};

const rootReducer = combineReducers({
    recipes,
    recipe
});

export default rootReducer;

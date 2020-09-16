import { combineReducers } from "redux";
import recipes, { RecipesState } from "reducers/recipes";
import recipe, { RecipeState } from "reducers/recipe";
import form, { FormState } from "reducers/form";

export type State = {
    recipes: RecipesState;
    recipe: RecipeState;
    form: FormState;
};

const rootReducer = combineReducers({
    recipes,
    recipe,
    form
});

export default rootReducer;

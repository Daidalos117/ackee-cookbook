import {
    FormActions,
    SUBMIT_RECIPE_REQUESTED,
    SUBMIT_RECIPE_SUCCESS,
    SUBMIT_RECIPE_ERROR,
    SUBMIT_RECIPE_ERROR_RESET
} from "../actions/form";

export interface FormState {
    recipe: RecipeState;
}

export interface RecipeState {
    isSubmitting: false;
    error: "";
}

const recipeInitialState = {
    isSubmitting: false,
    error: ""
};

const initialState = {
    recipe: recipeInitialState
};

export default (state = initialState, action: FormActions) => {
    switch (action.type) {
        case SUBMIT_RECIPE_REQUESTED:
            return {
                ...state,
                recipe: { ...state.recipe, isSubmitting: true }
            };
        case SUBMIT_RECIPE_SUCCESS:
            return {
                ...state,
                recipe: { data: {}, isSubmitting: false, error: "" }
            };
        case SUBMIT_RECIPE_ERROR:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    isSubmitting: false,
                    error: action.error
                }
            };
        case SUBMIT_RECIPE_ERROR_RESET:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    error: ""
                }
            };
        default:
            return state;
    }
};

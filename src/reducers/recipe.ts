import {
    FETCH_RECIPE_REQUESTED,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_ERROR
} from "../actions/recipe";
import { RecipeDetail } from "../general/types";
import { RecipeActionTypes } from "../actions/recipe";

export interface RecipeState {
    isLoading: boolean;
    error: string;
    data: RecipeDetail;
}

const initialState = {
    isLoading: false,
    error: "",
    data: {}
};

export default (state = initialState, action: RecipeActionTypes) => {
    switch (action.type) {
        case FETCH_RECIPE_REQUESTED:
            return { ...state, isLoading: true };
        case FETCH_RECIPE_SUCCESS:
            return { ...state, isLoading: false, data: action.data };
        case FETCH_RECIPE_ERROR:
            return { ...state, isLoading: false, data: action.error };
        default:
            return state;
    }
};

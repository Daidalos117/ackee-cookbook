import {
    FETCH_RECIPE_REQUESTED,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_ERROR,
    RATE_RECIPE_SUCCESS,
    RATE_LOAD_SUCCESS
} from "../actions/recipe";
import { RecipeDetail } from "../general/types";
import { RecipeActionTypes } from "../actions/recipe";

export interface RecipeState {
    isLoading: boolean;
    error: string;
    data: RecipeDetail;
    ownRating: null | number;
}

const initialState = {
    isLoading: false,
    error: "",
    data: {},
    ownRating: null
};

export default (state = initialState, action: RecipeActionTypes) => {
    switch (action.type) {
        case FETCH_RECIPE_REQUESTED:
            return { ...state, isLoading: true };
        case FETCH_RECIPE_SUCCESS:
            return { ...state, isLoading: false, data: action.data };
        case FETCH_RECIPE_ERROR:
            return { ...state, isLoading: false, error: action.error };
        case RATE_RECIPE_SUCCESS:
        case RATE_LOAD_SUCCESS:
            return { ...state, ownRating: action.score };
        default:
            return state;
    }
};

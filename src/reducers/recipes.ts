import { Action } from 'redux';
import { FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR, FETCH_RECIPES_REQUESTED } from '../actions/recipes';
import { Recipes } from '../types/recipes';
import { RecipesActionTypes } from '../actions/recipes';

export interface RecipesState {
    isLoading: boolean;
    error: string;
    data: Recipes;
}

const initialState = {
    isLoading: false,
    error: '',
    data: []
};

export default (state = initialState, action: RecipesActionTypes) => {
    switch (action.type) {
        case FETCH_RECIPES_REQUESTED:
            return { ...state, isLoading: true };
        case FETCH_RECIPES_SUCCESS:
            return { ...state, data: action.data, isLoading: false };
        case FETCH_RECIPES_ERROR:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
};

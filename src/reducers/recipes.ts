import { FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR, FETCH_RECIPES_REQUESTED } from '../actions/recipes';
import { Recipes } from 'general/types';
import { RecipesActionTypes } from '../actions/recipes';

export interface RecipesState {
    isLoading: boolean;
    error: string;
    data: Recipes;
    page: number;
    hasMore: boolean;
}

const initialState = {
    isLoading: false,
    error: '',
    data: [],
    page: 0,
    hasMore: true
};

export default (state = initialState, action: RecipesActionTypes) => {
    switch (action.type) {
        case FETCH_RECIPES_REQUESTED:
            return { ...state, isLoading: true };
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...action.data],
                isLoading: false,
                page: state.page + 1,
                hasMore: action.hasMore
            };
        case FETCH_RECIPES_ERROR:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
};

import { Action } from 'redux';
import {FETCH_RECIPES_SUCCESS} from "../actions/recipes";
import {Recipes} from "../types/recipes";
import {RecipesActionTypes} from "../actions/recipes";

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
      case FETCH_RECIPES_SUCCESS:
            return {data: action.data , ...state};
        default:
            return state;
    }
};

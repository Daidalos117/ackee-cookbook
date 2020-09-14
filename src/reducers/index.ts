import { combineReducers, CombinedState } from 'redux';
import recipes, {RecipesState} from 'reducers/recipes';

export type State = {
  recipes: RecipesState
}

const rootReducer = combineReducers({
  recipes,

});

export default rootReducer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestFetchRecipes } from '../actions/recipes';
import { State } from '../reducers';
import Item from 'components/Item/Item';

interface Props {}

const RecipeList: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const recipes = useSelector((state: State) => state.recipes.data);

    useEffect(() => {
        dispatch(requestFetchRecipes());
    }, [dispatch]);

    console.log(recipes);
    return (
      <div>
        {recipes.map(recipe => <Item {...recipe} key={recipe.id} />)}
      </div>
    );
};

export default RecipeList;

import React, {useEffect } from 'react';
import {useDispatch} from "react-redux";
import {requestFetchRecipes} from "../actions/recipes";

interface Props {
}

const RecipeList: React.FC<Props> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestFetchRecipes())
  }, [dispatch])

  return (<div></div>);
};

export default RecipeList;

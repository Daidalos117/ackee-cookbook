import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Recipes from "pages/Recipes";
import RecipeDetail from "pages/RecipeDetail";
import { RECIPES, RECIPES_DETAIL } from "./routes";

interface Props {}

const Component: React.FC<Props> = props => (
    <Switch>
        <Route path="/" render={() => <Redirect to={RECIPES} />} exact />
        <Route path={RECIPES} exact>
            <Recipes />
        </Route>
        <Route path={RECIPES_DETAIL()} exact>
            <RecipeDetail />
        </Route>
    </Switch>
);

export default Component;

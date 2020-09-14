import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Recipes from 'pages/Recipes';
import { RECIPES_NEW, RECIPES } from './routes';

interface Props {}

const Component: React.FC<Props> = props => (
    <Switch>
        <Route exact path='/' render={() => <Redirect to={RECIPES} />} />
        <Route path={RECIPES} exact>
            <Recipes />
        </Route>
    </Switch>
);

export default Component;

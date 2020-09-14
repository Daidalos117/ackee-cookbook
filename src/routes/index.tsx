import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Recipes from 'pages/Recipes';

interface Props {}

const Component: React.FC<Props> = props => (
    <Switch>
        <Route path="/recipes">
            <Recipes />
        </Route>
    </Switch>
);

export default Component;

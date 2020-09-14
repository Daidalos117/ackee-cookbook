import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Recipe } from '../types/recipes';

interface Props {}

type P = Props & Recipe;

const Item: React.FC<P> = ({ name, duration, score }) => (
    <Grid container>
        <Grid item xs={3}>
            <img src="http://placekitten.com/g/96/96" />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">
            {name}
          </Typography>
        </Grid>
    </Grid>
);

export default Item;

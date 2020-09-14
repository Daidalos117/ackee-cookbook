import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Recipe } from '../../types/recipes';
import {StyledItem, ItemContent} from './styled';

interface Props {}

type P = Props & Recipe;

const Item: React.FC<P> = ({ name, duration, score }) => (
    <StyledItem>
        <img src="http://placekitten.com/g/96/96" />
        <ItemContent>
          <Typography variant="h6">
            {name}
          </Typography>
        </ItemContent>
    </StyledItem>
);

export default Item;

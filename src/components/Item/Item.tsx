import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Recipe } from 'types/recipes';
import { StyledItem, ItemContent } from './styled';
import Loading from "../Loading";

interface Props {}

type P = Props & Recipe;

const Item: React.FC<P> = ({ name, duration, score }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <StyledItem>
            <Box position="relative" width={96} height={96}>
                <img src="http://placekitten.com/g/96/96" onLoad={() => setImgLoaded(true)} />
                {!imgLoaded && <Loading absolute />}
            </Box>
            <ItemContent>
                <Typography variant="h6">{name}</Typography>
            </ItemContent>
        </StyledItem>
    );
};

export default Item;

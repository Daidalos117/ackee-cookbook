import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

import { RECIPES_NEW } from '../routes/routes';
import RecipeList from 'components/RecipeList';

interface Props {}

const Recipes: React.FC<Props> = () => {
    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Typography variant="h6">Recepty</Typography>
                        <Box>
                            <Button component={Link} to={RECIPES_NEW} color="primary">
                                <AddIcon />
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container>
                <RecipeList />
            </Container>
        </>
    );
};

export default Recipes;

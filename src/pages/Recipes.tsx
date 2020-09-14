import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

import { RECIPES_NEW } from '../routes/routes';

interface Props {}

const Recipes: React.FC<Props> = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Recepty</Typography>
                    <Button component={Link} to={RECIPES_NEW}>
                        <AddIcon />
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>

            </Container>
        </>
    );
};

export default Recipes;

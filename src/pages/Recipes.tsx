import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

import { RECIPES_NEW } from "routes/routes";
import RecipeList from "components/RecipeList/RecipeList";
import MenuBar from "components/MenuBar/MenuBar";
import Layout from "components/Layout/Layout";

interface Props {}

const Recipes: React.FC<Props> = () => {
    return (
        <>
            <MenuBar color="default">
                <Typography variant="h6">Recepty</Typography>
                <Box>
                    <Button component={Link} to={RECIPES_NEW} color="primary">
                        <AddIcon />
                    </Button>
                </Box>
            </MenuBar>
            <Layout>
                <RecipeList />
            </Layout>
        </>
    );
};

export default Recipes;

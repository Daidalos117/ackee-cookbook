import React from "react";
import MenuBar from "components/MenuBar/MenuBar";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

import { RECIPES, RECIPES_NEW } from "../routes/routes";
import NewRecipeForm from "components/New/Form";
import Layout from "components/Layout/Layout";

interface Props {}

const RecipeNew: React.FC<Props> = props => (
    <>
        <MenuBar position="static">
            <Box display="flex">
                <Button
                    component={Link}
                    to={RECIPES}
                    color="primary"
                    size="medium"
                >
                    <ArrowBackIosIcon />
                </Button>
                <Typography variant="h6">Přidat recept</Typography>
            </Box>
            <Box display="flex">
                <Button
                    component={Link}
                    to={RECIPES_NEW}
                    color="primary"
                    size="medium"
                >
                    <AddIcon />
                </Button>
            </Box>
        </MenuBar>
        <Layout>
            <NewRecipeForm />
        </Layout>
    </>
);

export default RecipeNew;

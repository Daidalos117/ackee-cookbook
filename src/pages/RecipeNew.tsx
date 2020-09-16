import React from "react";
import MenuBar from "components/MenuBar/MenuBar";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddIcon from "@material-ui/icons/Add";

import { RECIPES, RECIPES_NEW } from "../routes/routes";
import NewRecipeForm from "components/New/Form";

interface Props {}

const RecipeNew: React.FC<Props> = props => (
    <>
        <MenuBar>
            <Box>
                <Button component={Link} to={RECIPES} color="default">
                    <ArrowBackIosIcon />
                    Přidat recept
                </Button>
            </Box>
            <Box>
                <Button component={Link} to={RECIPES_NEW} color="default">
                    <AddIcon />
                </Button>
            </Box>
        </MenuBar>
        <NewRecipeForm />
    </>
);

export default RecipeNew;

import React, { useCallback } from "react";
import MenuBar from "components/MenuBar/MenuBar";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";

import { RECIPES } from "routes/routes";
import NewRecipeForm from "components/New/Form";
import Layout from "components/Layout/Layout";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SUBMIT_RECIPE_REQUESTED, submitRecipeRequest } from "actions/form";

import { State } from "reducers";

interface Props {}

const RecipeNew: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const isSubmitting = useSelector(
        (state: State) => state.form.recipe.isSubmitting
    );

    const onFormSubmit = useCallback(() => {}, [dispatch]);

    return (
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
                        type="submit"
                        form="saveForm"
                        color="primary"
                        size="medium"
                    >
                        {isSubmitting ? <CircularProgress /> : <AddIcon />}
                    </Button>
                </Box>
            </MenuBar>
            <Layout>
                <NewRecipeForm
                    onSubmit={data => dispatch(submitRecipeRequest(data))}
                />
            </Layout>
        </>
    );
};

export default RecipeNew;

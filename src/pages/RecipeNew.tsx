import React from "react";
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
import { resetRecipeError, resetRecipeSuccess } from "actions/form";
import Snackbar from "components/Snackbar/Snackbar";
import { State } from "reducers";

interface Props {}

const RecipeNew: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const isSubmitting = useSelector(
        (state: State) => state.form.recipe.isSubmitting
    );
    const formSuccess = useSelector(
        (state: State) => state.form.recipe.success
    );
    const formError = useSelector((state: State) => state.form.recipe.error);

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
                    {isSubmitting ? (
                        <CircularProgress size={25} />
                    ) : (
                        <Button
                            type="submit"
                            form="saveForm"
                            color="primary"
                            size="medium"
                        >
                            <AddIcon />
                        </Button>
                    )}
                </Box>
            </MenuBar>
            <Layout>
                <NewRecipeForm />
                <Snackbar
                    severity="error"
                    open={!!formError}
                    handleClose={() => dispatch(resetRecipeError())}
                >
                    {formError}
                </Snackbar>

                <Snackbar
                    severity="success"
                    open={!!formSuccess}
                    handleClose={() => dispatch(resetRecipeSuccess())}
                >
                    Recept úspěšně uložen.
                </Snackbar>
            </Layout>
        </>
    );
};

export default RecipeNew;

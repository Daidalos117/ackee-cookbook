import React, {  useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { useDispatch } from "react-redux";

import MenuBar from "components/MenuBar";
import { RECIPES_NEW } from "../routes/routes";
import { fetchRecipeRequest } from "../actions/recipe";

interface Props {}

const RecipeDetail: React.FC<Props> = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipeRequest(id));
    }, [dispatch, id]);

    return (
        <>
            <MenuBar>
                <Typography variant="h6">Ah</Typography>
                <Box>
                    <Button component={Link} to={RECIPES_NEW} color="primary">
                        <AddIcon />
                    </Button>
                </Box>
            </MenuBar>
        </>
    );
};

export default RecipeDetail;

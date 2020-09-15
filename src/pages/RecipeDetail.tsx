import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { useDispatch, useSelector } from "react-redux";

import MenuBar from "components/MenuBar";
import { RECIPES_NEW } from "../routes/routes";
import { fetchRecipeRequest } from "../actions/recipe";


import { State } from "../reducers";
import Header from 'components/Detail/Header';


interface Props {}

const RecipeDetail: React.FC<Props> = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector((state: State) => state.recipe.data);
    const isLoading = useSelector((state: State) => state.recipe.isLoading);

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
            <Header name={recipe.name} rating={recipe.score}  duration={recipe.duration} />
        </>
    );
};

export default RecipeDetail;

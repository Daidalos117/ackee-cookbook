import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";

import MenuBar from "components/MenuBar/MenuBar";
import { RECIPES, RECIPES_NEW } from "routes/routes";
import { fetchRecipeRequest } from "actions/recipe";
import { State } from "reducers";
import Header from "components/Detail/Header";
import Content from "components/Detail/Content";
import Rate from "components/Detail/Rate";

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
            <MenuBar position="absolute" elevation={0}>
                <Box color="white">
                    <Button component={Link} to={RECIPES} color="inherit">
                        <ArrowBackIosIcon />
                    </Button>
                </Box>
                <Box color="white">
                    <Button component={Link} to={RECIPES_NEW} color="inherit">
                        <AddIcon color="inherit" />
                    </Button>
                </Box>
            </MenuBar>
            <Header
                name={recipe.name}
                score={parseFloat(`${recipe.score}`)}
                duration={recipe.duration}
                isLoading={isLoading}
            />
            <Content
                info={recipe.info}
                isLoading={isLoading}
                description={recipe.description}
                ingredients={recipe.ingredients}
            />
            <Box mt={5}>
                <Rate />
            </Box>
        </>
    );
};

export default RecipeDetail;

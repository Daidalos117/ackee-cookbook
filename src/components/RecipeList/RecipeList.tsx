import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "react-responsive";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Swipeable, EventData } from "react-swipeable";

import { fetchRecipesRequest } from "actions/recipes";
import { deleteRecipeRequested } from "actions/recipe";
import { State } from "reducers/index";
import Item from "components/Item/Item";
import Loading from "components/Loading/Loading";
import { RECIPES_DETAIL } from "routes/routes";
import { useHistory } from "react-router";
import { RecipeWithBackendData as Recipe } from "general/types";

interface Props {}

const RecipeList: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state: State) => state.recipes.data);
    const isLoading = useSelector((state: State) => state.recipes.isLoading);
    const hasMore = useSelector((state: State) => state.recipes.hasMore);
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)",
    });
    const dispatchFetchRequest = useCallback(
        () => dispatch(fetchRecipesRequest(isDesktopOrLaptop ? 20 : 10)),
        [dispatch, isDesktopOrLaptop]
    );
    const history = useHistory();
    const [deleteRecipe, setDeleteRecipe] = useState<null | Recipe>(null);

    const swipedLeftHandler = (eventData: EventData, recipe: Recipe) => {
        setDeleteRecipe(recipe);
    };

    const handleDialogClose = () => {
        setDeleteRecipe(null);
    };

    const handleDelete = () => {
        setDeleteRecipe(null);
        deleteRecipe && dispatch(deleteRecipeRequested(deleteRecipe.id));
    };

    useEffect(() => {
        dispatchFetchRequest();
    }, [dispatchFetchRequest]);

    return (
        <div>
            {isLoading && <Loading />}
            <InfiniteScroll
                dataLength={recipes.length}
                loader={<Loading height={100} />}
                hasMore={hasMore}
                next={dispatchFetchRequest}
            >
                <Grid container>
                    {recipes.map((recipe: Recipe) => (
                        <Grid item xs={12} md={6} lg={4} key={recipe.id}>
                            <Swipeable
                                onSwipedLeft={(e) =>
                                    swipedLeftHandler(e, recipe)
                                }
                            >
                                <Item
                                    {...recipe}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push(RECIPES_DETAIL(recipe.id));
                                    }}
                                />
                            </Swipeable>
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>

            <Dialog
                open={!!deleteRecipe}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Opravdu smazat "${deleteRecipe?.name}" recept?`}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Pryč
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        Smazat
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default RecipeList;

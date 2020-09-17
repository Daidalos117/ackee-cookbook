import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "react-responsive";

import { fetchRecipesRequest } from "actions/recipes";
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
        query: "(min-device-width: 1024px)"
    });
    console.log(isDesktopOrLaptop);
    const dispatchFetchRequest = useCallback(
        () => dispatch(fetchRecipesRequest(isDesktopOrLaptop ? 20 : 10)),
        [dispatch, isDesktopOrLaptop]
    );
    const history = useHistory();

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
                            <Item
                                {...recipe}
                                onClick={e => {
                                    e.preventDefault();
                                    history.push(RECIPES_DETAIL(recipe.id));
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
        </div>
    );
};

export default RecipeList;

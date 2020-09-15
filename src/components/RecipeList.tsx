import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchRecipesRequest } from "../actions/recipes";
import { State } from "../reducers";
import Item from "components/Item/Item";
import Loading from "components/Loading";
import { RECIPES_DETAIL } from "../routes/routes";
import { useHistory } from "react-router";

interface Props {}

const RecipeList: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state: State) => state.recipes.data);
    const isLoading = useSelector((state: State) => state.recipes.isLoading);
    const hasMore = useSelector((state: State) => state.recipes.hasMore);
    const dispatchFetchRequest = useCallback(
        () => dispatch(fetchRecipesRequest()),
        [dispatch]
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
                {recipes.map(recipe => (
                    <Item
                        {...recipe}
                        key={recipe.id}
                        onClick={e => {
                            e.preventDefault();
                            history.push(RECIPES_DETAIL(recipe.id));
                        }}
                    />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default RecipeList;

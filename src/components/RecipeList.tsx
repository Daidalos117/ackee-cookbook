import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { requestFetchRecipes } from '../actions/recipes';
import { State } from '../reducers';
import Item from 'components/Item/Item';
import Loading from 'components/Loading';

interface Props {}

const RecipeList: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const recipes = useSelector((state: State) => state.recipes.data);
    const isLoading = useSelector((state: State) => state.recipes.isLoading);
    const hasMore = useSelector((state: State) => state.recipes.hasMore);
    const dispatchFetchRequest = useCallback(() => dispatch(requestFetchRecipes()), [dispatch])

    useEffect(() => {
        dispatchFetchRequest()
    }, [dispatchFetchRequest]);

    return (
        <div>
            {isLoading && <Loading />}
            <InfiniteScroll dataLength={recipes.length} loader={<Loading height={100} />} hasMore={hasMore} next={dispatchFetchRequest}>
                {recipes.map(recipe => (
                    <Item {...recipe} key={recipe.id} />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default RecipeList;

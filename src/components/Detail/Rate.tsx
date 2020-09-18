import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import Rating from "@material-ui/lab/Rating";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { StyledRateBar } from "./styled";
import { State } from "reducers";
import { rateRecipeRequest, rateLoadRequest } from "actions/recipe";

interface Props {}

const Rate: React.FC<Props> = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const value = useSelector((state: State) => state.recipe.ownRating);

    useEffect(() => {
        dispatch(rateLoadRequest(id));
    }, [id, dispatch]);

    return (
        <StyledRateBar>
            <Typography className="heading">Ohodnoť tento recept</Typography>
            <Rating
                name="rating"
                size="large"
                value={value || 0}
                readOnly={!!value}
                onChange={(e, value) =>
                    value && dispatch(rateRecipeRequest(id, value))
                }
            />
        </StyledRateBar>
    );
};

export default Rate;

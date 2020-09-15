import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import Rating from "@material-ui/lab/Rating";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import { StyledRateBar } from "./styled";
import { rateRecipeRequest } from "actions/recipe";

interface Props {}

const Rate: React.FC<Props> = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    return (
        <StyledRateBar>
            <Typography className="heading">Ohodnoť tento recept</Typography>
            <Rating
                name="rating"
                size="large"
                onChange={(e, value) =>
                    value && dispatch(rateRecipeRequest(id, value))
                }
            />
        </StyledRateBar>
    );
};

export default Rate;

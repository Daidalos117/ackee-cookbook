import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { StyledRateBar } from "./styled";
import Rating from "@material-ui/lab/Rating";

interface Props {}

const Rate: React.FC<Props> = props => {
    return (
        <StyledRateBar>
            <Typography className="heading">Ohodnoť tento recept</Typography>
            <Rating />
        </StyledRateBar>
    );
};

export default Rate;

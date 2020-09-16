import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

import { RecipeWithBackendData as Recipe } from "general/types";
import { StyledItem, ItemContent } from "./styled";
import Duration from "components/Duration/Duration";
import Loading from "../Loading/Loading";

interface Props {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

type P = Props & Recipe;

const Item: React.FC<P> = ({ name, duration, score, onClick }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <StyledItem onClick={onClick}>
            <Box position="relative" width={96} height={96}>
                <img
                    src="https://picsum.photos/96/96"
                    alt={name}
                    onLoad={() => setImgLoaded(true)}
                />
                {!imgLoaded && <Loading absolute />}
            </Box>
            <ItemContent>
                <Typography variant="h6" className="heading">{name}</Typography>
                <Rating value={score} size="small" readOnly />
                <Duration fontSize={15} duration={duration} />
            </ItemContent>
        </StyledItem>
    );
};

export default Item;

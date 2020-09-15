import React from "react";
import { RecipeContent } from "general/types";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Skeleton from "@material-ui/lab/Skeleton/Skeleton";

import { MargedContainer, StyledSection } from "./styled";

interface Props {
    isLoading: boolean;
}

const Content: React.FC<Props & RecipeContent> = ({
    info,
    description,
    ingredients,
    isLoading
}) => (
    <>
        <MargedContainer>
            {isLoading ? (
                <Skeleton
                    variant="rect"
                    width={300}
                    height={100}
                    animation="wave"
                />
            ) : (
                <Typography variant="subtitle1">{info}</Typography>
            )}

            <StyledSection>
                <Typography variant="h5" className="heading">Ingredience</Typography>
                <List>
                    {isLoading ? (
                        <Skeleton
                            variant="rect"
                            width={300}
                            height={200}
                            animation="wave"
                        />
                    ) : (
                        ingredients &&
                        ingredients.map(ingredient => (
                            <ListItem key={ingredient}>{ingredient}</ListItem>
                        ))
                    )}
                </List>
            </StyledSection>
            <StyledSection>
                <Typography variant="h5" className="heading">Příprava jídla</Typography>
                {isLoading ? (
                    <Skeleton
                        variant="rect"
                        width={300}
                        height={200}
                        animation="wave"
                    />
                ) : (
                    <Typography variant="body2">{description}</Typography>
                )}
            </StyledSection>
        </MargedContainer>
    </>
);

export default Content;

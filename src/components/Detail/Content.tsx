import React from "react";
import { RecipeContent } from "general/types";
import Typography from "@material-ui/core/Typography/Typography";
import ListItem from "@material-ui/core/ListItem";
import Skeleton from "@material-ui/lab/Skeleton/Skeleton";

import { StyledSection, StyledList } from "./styled";
import Layout from "components/Layout/Layout";

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
        <Layout>
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
                <Typography variant="h5" className="heading">
                    Ingredience
                </Typography>
                <StyledList>
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
                </StyledList>
            </StyledSection>
            <StyledSection>
                <Typography variant="h5" className="heading">
                    Příprava jídla
                </Typography>
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
        </Layout>
    </>
);

export default Content;

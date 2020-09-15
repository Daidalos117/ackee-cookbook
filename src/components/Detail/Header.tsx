import React from "react";
import { Header as StyledHeader } from "./styled";
import Container from "@material-ui/core/Container/Container";
import Typography from "@material-ui/core/Typography/Typography";
import Box from "@material-ui/core/Box/Box";
import Rating from "@material-ui/lab/Rating";
import Skeleton from "@material-ui/lab/Skeleton";

import Duration from "../Duration/Duration";
import headerBg from "img/img_big.png";

interface Props {
    name?: string;
    rating?: number;
    duration?: number;
    isLoading: boolean;
}

const Header: React.FC<Props> = ({ name, duration, rating, isLoading }) => (
    <StyledHeader>
        <img src={headerBg} alt="Recipe Header BG" className="bg" />
        <div className="inner">
            <Container>
                <Typography variant="h4" className="heading">
                    {isLoading ? (
                        <Skeleton
                            variant="rect"
                            width={210}
                            height={30}
                            animation="wave"
                        />
                    ) : (
                        name
                    )}
                </Typography>
                <div className="bottom-bar">
                    <div>
                        <Rating readOnly />
                    </div>
                    <Box textAlign="right">
                        {isLoading ? (
                            <Skeleton
                                variant="rect"
                                width={30}
                                height={20}
                                animation="wave"
                            />
                        ) : (
                            <Duration
                                color="secondary"
                                duration={duration || 0}
                            />
                        )}
                    </Box>
                </div>
            </Container>
        </div>
    </StyledHeader>
);

export default Header;

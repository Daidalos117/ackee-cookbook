import React from "react";
import { Header as StyledHeader } from "./styled";
import Container from "@material-ui/core/Container/Container";
import Typography from "@material-ui/core/Typography/Typography";
import Box from "@material-ui/core/Box/Box";
import Rating from "@material-ui/lab/Rating";
import Skeleton from "@material-ui/lab/Skeleton";
import useTheme from "@material-ui/core/styles/useTheme";

import Duration from "../Duration/Duration";
import headerBg from "img/img_big.png";

interface Props {
    name?: string;
    score?: number;
    duration?: number;
    isLoading: boolean;
}

const Header: React.FC<Props> = ({ name, duration, score, isLoading }) => {
    const theme = useTheme();

    return(
    <StyledHeader>
      <img src={headerBg} alt="Recipe Header BG" className="bg" />
      <div className="inner">
        <Container>
          <Typography variant="h4" className="heading" >
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
        </Container>

        <div className="bottom-bar">
          <Container>
            <Box display="flex" justifyContent="space-between">
              <div>
                <Rating value={score} readOnly />
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
                    color={theme.palette.text.secondary}
                    duration={duration || 0}
                  />
                )}
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;

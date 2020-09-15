import React from "react";
import { Header as StyledHeader } from "./styled";
import Container from "@material-ui/core/Container/Container";
import Typography from "@material-ui/core/Typography/Typography";
import Rating from "@material-ui/lab/Rating";

import Duration from "../Duration/Duration";
import headerBg from "img/img_big.png";

interface Props {
    name: string;
    rating: number;
    duration: number;
}

const Header: React.FC<Props> = ({ name, duration, rating }) => (
    <StyledHeader>
        <img src={headerBg} alt="Recipe Header BG" className="bg" />
        <div className="inner">
            <Container>
                <Typography variant="h4" className="heading">
                    {name}
                </Typography>
                <div className="bottom-bar">
                    <div>
                        <Rating readOnly />
                    </div>
                    <div>
                        <Duration color="secondary" duration={duration} />
                    </div>
                </div>
            </Container>
        </div>
    </StyledHeader>
);

export default Header;

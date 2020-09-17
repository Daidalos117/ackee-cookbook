import React from "react";
import Container from "@material-ui/core/Container/Container";
import { StyledContainer } from "./styled";

interface Props {
    marginTop?: number | boolean;
}

const Layout: React.FC<Props> = ({ children, marginTop }) => (
    <StyledContainer $marginTop={typeof marginTop !=='undefined' ? marginTop : true}>
        <Container>{children || "Nothing to see here :("}</Container>
    </StyledContainer>
);

export default Layout;

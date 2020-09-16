import React from "react";
import Container from "@material-ui/core/Container/Container";
import { StyledContainer } from "./styled";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => (
    <StyledContainer>
        <Container>{children || "Nothing to see here :("}</Container>
    </StyledContainer>
);

export default Layout;

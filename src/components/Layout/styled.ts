import styled from "styled-components";
import Container from "@material-ui/core/Container/Container";

export interface StyledContainerProps {
    $marginTop: number | boolean;
}
export const StyledContainer = styled(Container)<StyledContainerProps>`
    margin-top: ${({ $marginTop }) => ($marginTop ? "55px" : "0")};
`;

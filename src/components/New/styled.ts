import styled from "styled-components";
import Typography from "@material-ui/core/Typography/Typography";


export const StyledHeading = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  font-weight: bold;
`

import styled from "styled-components";

export const StyledItem = styled.div`
    ${({ theme }) => `
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 2px solid #f6f6f6;
  max-width: 100%;
  
  &:hover {
    background-color: ${theme.palette.grey.A100}
    
  }
 `}
`;

export const ItemContent = styled.div`
    padding-left: 18px;
    flex: 1;

    .heading {
        word-break: break-all;
    }
`;

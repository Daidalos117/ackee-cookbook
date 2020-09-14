import styled from "styled-components";


export const StyledItem = styled.div`
    ${({ theme }) => `
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 2px solid #f6f6f6;
  
  &:hover {
    background-color: ${theme.palette.grey.A100}
    
  }
 `}
`;

export const ItemContent = styled.div`
    padding-left: 18px;
    flex: 1;
`;

export const ItemDuration = styled.div`
    font-size: 15px;
`;

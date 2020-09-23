import styled from "styled-components";
import { Theme } from "@material-ui/core";
import {getTheme} from "general/helpers";


export const StyledItem = styled.div`
    ${({ theme }: { theme: Theme }) => `
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 2px solid #f6f6f6;
  max-width: 100%;
  
  @media (min-width: 768px) 
  {
      padding-right: ${getTheme(theme).spacing()}px;
      padding-left: ${getTheme(theme).spacing()}px;
  }

  
  &:hover {
      background-color: ${getTheme(theme).palette.grey["100"]} ;
      cursor: pointer;
  }
  
 `}
`;

export const ItemContent = styled.div`
    ${({ theme }: { theme: Theme }) => `
    padding-left: 18px;
    flex: 1;

    .heading {
        word-break: break-all;
        color: ${theme.palette.primary.main};
        font-size: 1.062rem;
        font-weight: bold;
    }
    
    
    .MuiRating-iconFilled {
        color: ${theme.palette.secondary.main};
    }

    .MuiRating-iconEmpty {
        display: none;
    }
 `}
`;

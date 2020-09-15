import styled from "styled-components";
import Box from "@material-ui/core/Box/Box";
import { Theme } from "@material-ui/core";

export const Header = styled.header`
    ${({ theme }) => `
    display: flex;
    height: 380px;
    position: relative;
    overflow: hidden;
    align-items: flex-end;

    .bg {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .inner {
        position: relative;
        z-index: 2;
        width: 100%;
    }

    .heading {
        margin-bottom: 20px;
    }

    .bottom-bar {
        width: 100%;
        padding: 20px 0;
        background-color: ${(theme as Theme).palette.secondary.main};
    }

    .MuiRating-iconFilled {
    }

    .MuiRating-iconEmpty {
    }
`}
`;

export const HeaderBg = styled.img`
    width: 100%;
`;

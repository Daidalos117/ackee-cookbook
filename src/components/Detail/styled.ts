import styled from "styled-components";
import { Theme } from "@material-ui/core";
import List from "@material-ui/core/List";

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
`}
`;

export const StyledSection = styled.section`
    margin-top: 30px;

    .heading {
        margin-bottom: 20px;
        color: ${({ theme }) => theme.palette.primary.main};
    }
`;

export const StyledRateBar = styled.div`
    padding: 35px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.main};

    .heading {
        color: ${({ theme }) => theme.palette.primary.contrastText};
        font-size: 20px;
        margin-bottom: 30px;
    }

    .MuiRating-icon svg {
        width: 50px;
        height: 50px;
    }

    .MuiRating-iconFilled {
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    .MuiRating-iconEmpty {
        color: ${({ theme }) => theme.palette.text.disabled};
    }
`;

export const StyledList = styled(List)`
    padding-left: 30px;
    list-style: disc;

    li {
        display: list-item;
        padding: 5px 0;
    }
`;

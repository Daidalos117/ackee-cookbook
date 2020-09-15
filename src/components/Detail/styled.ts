import styled from "styled-components";
import Box from "@material-ui/core/Box/Box";

export const Header = styled(Box)`
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
    }

    .heading {
        margin-bottom: 20px;
    }

    .bottom-bar {
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
    }

    .MuiRating-iconFilled {
    }

    .MuiRating-iconEmpty {
    }
`;

export const HeaderBg = styled.img`
    width: 100%;
`;

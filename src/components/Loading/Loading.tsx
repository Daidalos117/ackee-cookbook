import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box, { BoxProps } from "@material-ui/core/Box";

interface Props {
    absolute?: boolean;
}

const absoluteStyles = {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 2,
    width: "100%",
    height: "100%"
};

const Loading: React.FC<BoxProps & Props> = ({ absolute, ...boxProps }) => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        {...(absolute && absoluteStyles)}
        {...boxProps}
    >
        <CircularProgress />
    </Box>
);

export default Loading;

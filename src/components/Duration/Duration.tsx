import React from "react";
import Schedule from "@material-ui/icons/Schedule";
import Box from "@material-ui/core/Box";

interface Props {
    fontSize?: string | number;
    color?: string;
    duration: number;
    fontWeight?: "bold" | "normal" | "light";
}

const Component: React.FC<Props> = ({
    fontSize,
    duration,
    color,
    fontWeight,
}) => (
    <Box
        fontSize={fontSize || "14px"}
        color={color || "primary"}
        fontWeight={fontWeight || "normal"}
    >
        <Schedule fontSize="inherit" />
        {` ${duration} min.`}
    </Box>
);

export default Component;

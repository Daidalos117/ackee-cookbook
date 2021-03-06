import React from "react";
import Schedule from "@material-ui/icons/Schedule";
import Box from "@material-ui/core/Box";

interface Props {
    fontSize?: string | number;
    color?: string;
    duration: number | string;
    fontWeight?: "bold" | "normal" | "light";
}

const Duration: React.FC<Props> = ({
    fontSize,
    duration,
    color,
    fontWeight,
}) => (
    <Box
        fontSize={fontSize || "14px"}
        color={color || "primary"}
        fontWeight={fontWeight || "normal"}
        title="duration"
    >
        <Schedule fontSize="inherit" />
        {` ${duration} min.`}
    </Box>
);

export default Duration;

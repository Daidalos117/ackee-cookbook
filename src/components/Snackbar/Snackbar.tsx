import React from "react";
import MuiSnackbar from "@material-ui/core/Snackbar/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert/Alert";

interface Props {
    onClose?: () => void;
    open: boolean;
    handleClose: () => void;
}

const SnackBar: React.FC<Props & Partial<AlertProps>> = ({
    children,
    handleClose,
    open,
    ...alertProps
}) => (
    <>
        <MuiSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity="success"
                {...alertProps}
            >
                {children}
            </MuiAlert>
        </MuiSnackbar>
    </>
);

export default SnackBar;

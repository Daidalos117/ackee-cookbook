import React from "react";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box/Box";

interface Props {}

const MenuBar: React.FC<Props & AppBarProps> = ({
    children,
    ...appBarProps
}) => (
    <>
        <AppBar position="fixed" color="transparent" {...appBarProps}>
            <Toolbar>
                <Container>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                    >
                        {children}
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    </>
);

export default MenuBar;

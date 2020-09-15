import React from "react";
import {
  Link, useParams
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import {RECIPES_NEW} from "../routes/routes";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
interface Props {}

const RecipeDetail: React.FC<Props> = props => {
  let { id } = useParams();

  return (<>
    <AppBar position="fixed" color="transparent">
      <Toolbar>
        <Container>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h6">Ah</Typography>
            <Box>
              <Button component={Link} to={RECIPES_NEW} color="primary">
                <AddIcon />
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  </>);
}

export default RecipeDetail;

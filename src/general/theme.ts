import { createMuiTheme } from "@material-ui/core";

const COLOR_PRIMARY = "#0000ff";
const COLOR_SECONDARY = "#ff00ff";

const defaultTheme = createMuiTheme();

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: COLOR_PRIMARY
        },
        secondary: {
            main: COLOR_SECONDARY
        },
        text: {
            secondary: "white"
        }
    },
    typography: {
        h5: {}
    },
    overrides: {
        MuiInput: {
            input: {
                //color: defaultTheme.palette.text.secondary
            }
        },
        MuiFormLabel: {
            root: {
                color: defaultTheme.palette.text.secondary
            }
        },
        MuiTypography: {
          body2: {
              fontSize: '1rem'
          }
        }
    }
});

export default myTheme;

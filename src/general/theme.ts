import { createMuiTheme } from "@material-ui/core";

const COLOR_PRIMARY = '#0000ff';
const COLOR_SECONDARY = '#ff00ff';

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: COLOR_PRIMARY
        },
        secondary: {
            main: COLOR_SECONDARY
        },
        text: {
          //secondary: 'white'
        }
    },
    typography: {
        h5: {
            
        }
    }
});

export default myTheme;

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import palette from './palette';
import typography from './typography';


// Create a theme instance.
const theme = createMuiTheme({
  shape: {
    borderRadius: 14,
  },
  overrides:{
    MUIRichTextEditor: {
        root: {
            marginTop: 20,
            width: "80%",
            color: "#fefefe"
        },
        container: {
          backgroundColor: "#333d69",
          toolbar: {
          },
        },
        editor: {
          paddingLeft: 20,
          paddingTop:30,
          backgroundColor: "#333d69",
          borderBottom: "1px solid gray",
          fontSize:18,
        },
        editorContainer: {
          codeBlock: {
            color: 'red',
            root: {
              backgroundColor: "#4C5B9C",
            }
          },
        }
    },
    MuiIconButton:{
      root: {
        '&:hover':{
          color: 'white'
        }
      }
    }
  },
  palette,
  typography
});

export default theme;
